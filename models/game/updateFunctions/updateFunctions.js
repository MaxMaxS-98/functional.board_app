// function to update database after every player move
function updateDatabase() {
    // update database with Sequelize

    db.sequelize.sync({ force: false }).then(function() {
        console.log('Database updated!');
    });
}