//NO PHP ACTION YET

//EMPLOYEE FORMS
function queryForm() {
    const div = document.querySelector('.formShifter');
    div.innerHTML = `
    <div class=idQuery>
        <form>
            <label> VOTER QUERYING SYSTEM </label>
            <input type="text" placeholder="Query By ID: ">
            <input type="text" placeholder="First Name...">
            <input type="text" placeholder="Last Name...">
            <input type="text" placeholder="Email Address...">
            <input type="text" placeholder="Phone Number...">
            <input type="submit" id="buttonCursor">
        </form>
    </div>
    `;

    const results = document.querySelector('.inner-grid-two');
    results.innerHTML = `
        BACKEND RESULTS HERE
    `;
}


function createForm() {
    const div = document.querySelector('.formShifter');
    div.innerHTML = `
    <div class="createNew">
        <form>
            <label> REGISTER A VOTER </label>
            <input type="text" placeholder="First Name: ">
            <input type="text" placeholder="Last Name: ">
            <input type="text" placeholder="Address: ">
            <input type="text" placeholder="City: ">
            <input type="text" placeholder="Barangay: ">
            <input type="text" placeholder="Age: ">
            <input type="text" placeholder="Birthday: ">
            <input type="text" placeholder="Gender: ">
            <input type="text" placeholder="Status: ">
            <input type="text" placeholder="Phone Number: ">
            <input type="text" placeholder="Email: ">
            
            
            <input type="submit" id="buttonCursor">
        </form>
    </div>
    `;

    const results = document.querySelector('.inner-grid-two');
    results.innerHTML = `
        BACKEND RESULTS HERE
    `;
}

function modifyForm() {
    const div = document.querySelector('.formShifter');
    div.innerHTML = `
    <div class="modifyEmployee">
        <form>
            <label> MODIFY VOTER RECORDS </label>
            <input type="text" placeholder="VOTER ID: ">
            <input type="text" placeholder="First Name: ">
            <input type="text" placeholder="Last Name: ">
            <input type="text" placeholder="Address: ">
            <input type="text" placeholder="City: ">
            <input type="text" placeholder="Barangay: ">
            <input type="text" placeholder="Age: ">
            <input type="text" placeholder="Birthday: ">
            <input type="text" placeholder="Gender: ">
            <input type="text" placeholder="Status: ">
            <input type="text" placeholder="Phone Number: ">
            <input type="text" placeholder="Email: ">
            <input type="submit" id="buttonCursor">
        </form>
    </div>
    `;

    const results = document.querySelector('.inner-grid-two');
    results.innerHTML = `
        BACKEND RESULTS HERE
    `;
}

function terminateForm() {
    const div = document.querySelector('.formShifter');
    div.innerHTML = `
    <div class="terminateEmployee">
        <form>
            <label> TERMINATE EXISTING VOTER </label>
            <input type="text" placeholder="VOTER ID:">
            <input type="submit" id="buttonCursor">
        </form>
    </div>
    `;

    const results = document.querySelector('.inner-grid-two');
    results.innerHTML = `
        BACKEND RESULTS HERE
    `;
}

//WRITE THE ONCLICKS HERE FOR THE MUTATED FORMS


















































































//---------------------------------------------------------------------//

//mutateToEmployees

function mutateToVoters(){
    const sideBar = document.querySelector('.external-sidebar');

    sideBar.innerHTML = `
        <div class="external-sidebar-projname">
            <h2> VOTERS <h2>
        </div>

        <div class="external-sidebar-button">
            <button onclick="queryForm()"> Query </button>
        </div>

        <div class="external-sidebar-button">
            <button onclick="createForm()"> Register </button>
        </div>

        <div class="external-sidebar-button">
            <button onclick="modifyForm()"> Modify </button>
        </div>

        <div class="external-sidebar-button">
            <button onclick="terminateForm()"> Purge </button>
        </div>
    `;

    const welcome = document.querySelector('.formShifter');

    welcome.innerHTML = `
        Welcome Administrator!
    `;

    const results = document.querySelector('.inner-grid-two');
    results.innerHTML = `
        BACKEND RESULTS HERE
    `;
}























//mutateToDepartments

function mutateToCandidates(){
    const sideBar = document.querySelector('.external-sidebar');
    sideBar.innerHTML = `
        <div class="external-sidebar-projname">
            <h2> CANDIDATES <h2>
        </div>

        <div class="external-sidebar-button">
            <button onclick="exploreForm()"> View </button>
        </div>

        <div class="external-sidebar-button">
            <button onclick="buildForm()"> Confirm </button>
        </div>

        <div class="external-sidebar-button">
            <button onclick="reworkForm()"> Update </button>
        </div>

        <div class="external-sidebar-button">
            <button onclick="dissolveForm()"> Disqualify </button>
        </div>
    `;

    const welcome = document.querySelector('.formShifter');

    welcome.innerHTML = `
        Welcome Administrator!
    `;

    const results = document.querySelector('.inner-grid-two');
    results.innerHTML = `
        BACKEND RESULTS HERE
    `;
}



// DEPARTMENT FORMS - findme

function exploreForm() {
    const div = document.querySelector('.formShifter');
    div.innerHTML = `
    <div class="exploreDepartment">
        <form>
            <label> SEARCH A CANDIDATE </label>
            <input type="text" placeholder="CANDIDATE ID: ">
            <input type="text" placeholder="First Name: ">
            <input type="text" placeholder="Last Name: ">
            <input type="text" placeholder="Position: ">
            <input type="text" placeholder="Party: ">
            <input type="submit" id="buttonCursor">
        </form>
    </div>
    `;

    const results = document.querySelector('.inner-grid-two');
    results.innerHTML = `
        BACKEND RESULTS HERE
    `;
}

function buildForm() {
    const div = document.querySelector('.formShifter');
    div.innerHTML = `
    <div class="buildDepartment">
        <form>
            <label> CONFIRM CANDIDATE FROM NOMINEES </label>
            <input type="text" placeholder="Nominee ID: ">
            <input type="submit" id="buttonCursor">
        </form>
    </div>
    `;

    const results = document.querySelector('.inner-grid-two');
    results.innerHTML = `
        BACKEND RESULTS HERE
    `;
}

function reworkForm(){
    const div = document.querySelector('.formShifter');
    div.innerHTML = `
    <div class="reviseProject">
        <form>
            <label> UPDATE CANDIDATE DATA </label>
            <input type="text" placeholder="CANDIDATE ID: ">
            <input type="text" placeholder="First Name: ">
            <input type="text" placeholder="Last Name: ">
            <input type="text" placeholder="Age: ">
            <input type="text" placeholder="Gender: ">
            <input type="text" placeholder="Birthdate: ">
            <input type="text" placeholder="Status: ">
            <input type="text" placeholder="Position: ">
            <input type="text" placeholder="Party: ">
            <input type="text" placeholder="City: ">
            <input type="submit" id="buttonCursor">
        </form>
    </div>
    `;

    const results = document.querySelector('.inner-grid-two');
    results.innerHTML = `
        BACKEND RESULTS HERE
    `;

}

function dissolveForm() {
    const div = document.querySelector('.formShifter');
    div.innerHTML = `
    <div class="dissolveDepartment">
        <form>
            <label> DISQUALIFY A CANDIDATE </label>
            <input type="text" placeholder="CANDIDATE ID:">
            <input type="submit" id="buttonCursor">
        </form>
    </div>
    `;

    const results = document.querySelector('.inner-grid-two');
    results.innerHTML = `
        BACKEND RESULTS HERE
    `;
}



































































function mutateToNominees(){
    const sideBar = document.querySelector('.external-sidebar');
    sideBar.innerHTML = `
        <div class="external-sidebar-projname">
            <h2> NOMINEES <h2>
        </div>

        <div class="external-sidebar-button">
            <button onclick="showForm()"> View </button>
        </div>

        <div class="external-sidebar-button">
            <button onclick="createProjectForm()"> Add </button>
        </div>

        <div class="external-sidebar-button">
            <button onclick="reviseForm()"> Update </button>
        </div>

        <div class="external-sidebar-button">
            <button onclick="abandonForm()"> Disqualify </button>
        </div>
    `;

    const welcome = document.querySelector('.formShifter');

    welcome.innerHTML = `
        Welcome Administrator!
    `;

    const results = document.querySelector('.inner-grid-two');
    results.innerHTML = `
        BACKEND RESULTS HERE
    `;
}

function showForm() {
    const div = document.querySelector('.formShifter');
    div.innerHTML = `
    <div class="showProject">
        <form>
            <label> VIEW NOMINEES </label>
            <input type="text" placeholder="Nominee ID: ">
            <input type="text" placeholder="First Name: ">
            <input type="text" placeholder="Last Name: ">
            <input type="text" placeholder="Position: ">
            <input type="text" placeholder="Party: ">
            <input type="text" placeholder="City: ">
            <input type="submit" id="buttonCursor">
        </form>
    </div>
    `;

    const results = document.querySelector('.inner-grid-two');
    results.innerHTML = `
        BACKEND RESULTS HERE
    `;
}

function createProjectForm() {
    const div = document.querySelector('.formShifter');
    div.innerHTML = `
    <div class="createProject">
        <form>
            <label> INSERT NOMINEE DATA </label>
            <input type="text" placeholder="First Name: ">
            <input type="text" placeholder="Last Name: ">
            <input type="text" placeholder="Age: ">
            <input type="text" placeholder="Gender: ">
            <input type="text" placeholder="Birthdate: ">
            <input type="text" placeholder="Status: ">
            <input type="text" placeholder="Position: ">
            <input type="text" placeholder="Party: ">
            <input type="text" placeholder="City: ">
            <input type="submit" id="buttonCursor">
        </form>
    </div>
    `;

    const results = document.querySelector('.inner-grid-two');
    results.innerHTML = `
        BACKEND RESULTS HERE
    `;
}

function reviseForm() {
    const div = document.querySelector('.formShifter');
    div.innerHTML = `
    <div class="reviseProject">
        <form>
            <label> UPDATE NOMINEE DATA </label>
            <input type="text" placeholder="NOMINEE ID: ">
            <input type="text" placeholder="First Name: ">
            <input type="text" placeholder="Last Name: ">
            <input type="text" placeholder="Age: ">
            <input type="text" placeholder="Gender: ">
            <input type="text" placeholder="Birthdate: ">
            <input type="text" placeholder="Status: ">
            <input type="text" placeholder="Position: ">
            <input type="text" placeholder="Party: ">
            <input type="text" placeholder="City: ">
            <input type="submit" id="buttonCursor">
        </form>
    </div>
    `;

    const results = document.querySelector('.inner-grid-two');
    results.innerHTML = `
        BACKEND RESULTS HERE
    `;
}

function abandonForm() {
    const div = document.querySelector('.formShifter');
    div.innerHTML = `
    <div class="abandonProject">
        <form>
            <label> DISQUALIFY EXISTING NOMINEE </label>
            <input type="text" placeholder="NOMINEE ID:">
            <input type="submit" id="buttonCursor">
        </form>
    </div>
    `;

    const results = document.querySelector('.inner-grid-two');
    results.innerHTML = `
        BACKEND RESULTS HERE
    `;
}





