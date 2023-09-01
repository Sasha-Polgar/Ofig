const db = require('./database');

const dataMapper = {

    async getAllFigurines(){
        const sqlQuery = `SELECT * FROM "figurine" ORDER BY name ASC`;
        const figurines = await db.query(sqlQuery);
        return figurines.rows;
    },

    async getOneFigurine(id){
        const sqlQuery = `SELECT * FROM "figurine" WHERE id = $1`;
        const oneFigurine = await db.query(sqlQuery, [id]);
        return oneFigurine.rows[0];

    },

    async getReviews(figurineId){
        const sqlQuery = `SELECT * FROM "review" WHERE figurine_id = $1`;
        const result = await db.query(sqlQuery, [figurineId]);
        return result.rows;
    },

    async getCategoryNumber(){
        const sqlQuery = `SELECT category, COUNT(name) AS number FROM figurine GROUP BY category ORDER BY number `;
        const result = await db.query(sqlQuery);
        return result.rows;
    },

    async getFigurinesByCategory(category){
        const sqlQuery = `SELECT * FROM figurine WHERE category = $1 `;
        const result = await db.query(sqlQuery, [category]);
        return result.rows;
    }

};

module.exports = dataMapper;