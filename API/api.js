const api_router = require('express').Router();

const { Console } = require('./models/console');
const { Game } = require('./models/game');
const { Post } = require('./models/post');


const
    name = 1,
    image = 1,
    techSpecs = 1,
    cover = 1;




const get_platforms = async () => Console.find();
const get_games = async () => Game.find();

const write_platform = async new_platform => {
    try {
        const res = await (new Console(new_platform)).save();
        return res;
    } catch (e) {
        return false;
    }
}
const write_game = async new_game => {
    try {
        const res = await (new Game(new_game)).save();
        return res;
    } catch (e) {
        return false;
    }
}
const write_post = async new_post => {
    try {
        const res = await (new Post(new_post)).save();
        return res;
    } catch (e) {
        return false;
    }
}

const get_platform = async id_or_name =>
    Console
        .findOne({
            $or: [
                { id: parseInt(id_or_name) },
                { name: id_or_name },
            ]
        });

const get_platforms_like = async name =>
    Console
        .find({ name: new RegExp(name, 'i') });

const get_game = id_or_name =>
    Game
        .findOne({
            $or: [
                { id: parseInt(id_or_name) },
                { name: id_or_name },
            ]
        });

const get_these_games = async games_ids => {

    return await Promise.all(games_ids.map(async id => await get_game(id)));
}

const get_platform_games = async id_or_name => {
    const platform = await get_platform(id_or_name);
    if (!platform) return false;

    const { games_ids } = platform;
    return (games_ids && await get_these_games(games_ids)) || [];
}

const get_games_like = async name =>
    Game
        .find({ name: new RegExp(name, 'i') });

const get_game_by_platform = async platform => {
    const games = await get_platform_games(platform);
    return (games && games[0]) || null;
}

const get_posts = async () =>
    Post.find();

api_router
    .post('/platform', async (req, res) => {
        console.log('writing platform');
        const write_res = write_platform(req.body);
        return write_res ? res.status(201).send(write_res) : res.status(400).send();
    })
    .post('/game', async (req, res) => {
        console.log('writing game');
        const write_res = write_game(req.body);
        return write_res ? res.status(201).send(write_res) : res.status(400).send();
    })
    .get('/platform', async (req, res) => {
        const platforms = await get_platforms();
        return platforms ? res.status(200).send(platforms) : res.status(404).send();
    })
    .get('/game', async (req, res) => {
        const games = await get_games();
        return games ? res.status(200).send(games) : res.status(404).send();
    })
    .get('/platform/:id_or_name', async (req, res) => {
        const { id_or_name } = req.params;

        const platform = await get_platform(id_or_name);
        return platform ? res.status(200).send(platform) : res.status(404).send();
    })
    .get('/platform/like/:name_re', async (req, res) => {
        const { name_re } = req.params;
        return res.status(200).send(await get_platforms_like(name_re));
    })
    .get('/platform/:id_or_name/games', async (req, res) => {
        const { id_or_name } = req.params;
        return res.status(200).send(await get_platform_games(id_or_name));
    })
    .get('/game/like/:name_re', async (req, res) => {
        const { name_re } = req.params;
        return res.status(200).send(await get_games_like(name_re));
    })
    .get('/game/:platform_or_game', async (req, res) => {
        const { platform_or_game } = req.params;
        return res
            .status(200)
            .send(
                (await get_game(platform_or_game)) || (await get_game_by_platform(platform_or_game))
            );
    })
    .get('/platform/:platform_id_or_name/game/:game_id_or_name', async (req, res) => {
        const { platform_id_or_name, game_id_or_name } = req.params;
        const platform = await get_platform(platform_id_or_name);
        if (!platform) res.status(404).send();

        const { games_ids: _games_ids } = platform;

        let games_ids = {};
        for (id of _games_ids) {
            games_ids[id] = id;
        }

        const game = await get_game(game_id_or_name);

        if (!game || !(JSON.parse(JSON.stringify(game)).id in games_ids)) return res.status(404).send();

        return game ? res.status(200).send(game) : res.status().send();
    })
    .get('/posts', async (req, res) =>
        res.status(200).send(await get_posts())
    )
    .post('/posts', async (req, res) => {
        req.body.date = new Date();
        const write_res = write_post(req.body);
        return write_res ? res.status(201).send(write_res) : res.status(400).send();
    });

exports.api_router = api_router;