// DEPENDENCIES
// ========================
var mySql = require("mysql");
var inquirer = require("inquirer");
var consoleTable = require("console.table")

// SETTING UP MYSQL DATABASE CONNECTION
// ===================================================
var connection = mySql.createConnection({
    host: "localhost",

    // Port
    port: 3306,

    // Username
    user: "root",

    // Password
    password: "Aqua5961!",
    database: "employee_portal"
});

connection.connect((err) => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    portalPrompt();
});

// CREATING ALL PROMPTS FOR THE CLI THAT THE USER WILL EXPERIENCE
// =============================================================================
const portalPrompt = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "Welcome to the employee portal! What would you like to do?",
            name: "Portal",
            choices: [
                "View All Employees",
                "Add A New Employee",
                "View All Departments",
                "Add A New Department",
                "View All Roles",
                "Add A New Role",
                "Promote/Demote Employee",
                "View Managers"
            ],
        }
    ]).then(answers => {
        console.table(answers);

        // GENERATING WHAT POPULATES ON THE CLI BY CALLING THE FUNCTION BELOW
        // =================================================================================
        switch (answers.Portal) {
            case "View All Employees":
                employees();
                connection.end(); // ALLOWS ME TO NOT HAVE TO CTRL+C EVERYTIME TO BE ABLE TO DO SOMETHING ELSE WITH THE TABLES
                break;
         
            case "View All Departments":
                departments();
                connection.end(); // ALLOWS ME TO NOT HAVE TO CTRL+C EVERYTIME TO BE ABLE TO DO SOMETHING ELSE WITH THE TABLES
                break;

            case "View All Roles":
                roles();
                connection.end(); // ALLOWS ME TO NOT HAVE TO CTRL+C EVERYTIME TO BE ABLE TO DO SOMETHING ELSE WITH THE TABLES
                break;
            
            case "View Managers":
                    managers();
                    connection.end(); // ALLOWS ME TO NOT HAVE TO CTRL+C EVERYTIME TO BE ABLE TO DO SOMETHING ELSE WITH THE TABLES
                    break;
        }

    })
}

// CREATING FUNCTIONS POPULATE WHAT IS SELECTED FROM THE DATABASE
// =================================================================================
function employees() {
    // NPM MYSQL DOCUMENTATION UNDER "POOLING CONNECTIONS" SHOWED ME THE FOLLOWING LINE
    connection.query("SELECT * FROM employees", (err, res) => {
        // =========================================================
        if (err) {
            throw err;
        }
        console.table(res);
    });
}

function departments() {
    // NPM MYSQL DOCUMENTATION UNDER "POOLING CONNECTIONS" SHOWED ME THE FOLLOWING LINE
    connection.query("SELECT * FROM departments", (err, res) => {
        // =========================================================
        if (err) {
            throw err;
        }
        console.table(res);
    });
}


function roles() {
    // NPM MYSQL DOCUMENTATION UNDER "POOLING CONNECTIONS" SHOWED ME THE FOLLOWING LINE
    connection.query("SELECT * FROM company_role", (err, res) => {
        // =========================================================
        if (err) {
            throw err;
        }
        console.table(res);
    });
}





// BONUS
// ============
function managers() {
        // NPM MYSQL DOCUMENTATION UNDER "POOLING CONNECTIONS" SHOWED ME THE FOLLOWING LINE
        connection.query("SELECT * FROM managers", (err, res) => {
            // =========================================================
            if (err) {
                throw err;
            }
            console.table(res);
        });
}