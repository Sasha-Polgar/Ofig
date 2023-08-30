const db = require('./database');

const dataMapper = {

    async getAllFigurines(){
        const sqlQuery = `SELECT * FROM "figurine" ORDER BY name ASC`;
        const allFigurines = await db.query(sqlQuery);
        return allFigurines.rows;
    },

    async getOneFigurine(id){
        const sqlQuery = `SELECT * FROM "figurine" WHERE id = $1`;
        const oneFigurine = await db.query(sqlQuery, [id]);
        return oneFigurine.rows;

    }


};

module.exports = dataMapper;