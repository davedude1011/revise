function OpenMenu(MenuID, Box) {
    try {
        if (Box.classList.contains("menu-hover")) {
            var MenuElement = document.querySelectorAll(`div[menu-id="${MenuID}"]`);
            for (let i = 0; i < MenuElement.length; i++) {
                let CurrentElement = MenuElement[i];
                if (CurrentElement.classList.contains("menu-hover")) {
                    CurrentElement.click()
                }
                setTimeout(function() {
                    CurrentElement.style.translate = "-100%";
                    setTimeout(function() { CurrentElement.style.display = "none" }, 50)
                }, i * 100); // i * 200 will create a delay that increases with each iteration
            }
        }
        else {
            var MenuElement = document.querySelectorAll(`div[menu-id="${MenuID}"]`);
            for (let i = 0; i < MenuElement.length; i++) {
                let CurrentElement = MenuElement[i];
                setTimeout(function() {
                    CurrentElement.style.display = "flex";
                    setTimeout(function() { CurrentElement.style.translate = "0" }, 50);
                }, i * 100); // i * 200 will create a delay that increases with each iteration
            }
        }
        Box.classList.toggle("menu-hover")
    }
    catch{
        var MenuElement = document.querySelectorAll(`div[menu-id="${MenuID}"]`);
        for (let i = 0; i < MenuElement.length; i++) {
            let CurrentElement = MenuElement[i];
            setTimeout(function() {
                CurrentElement.style.display = "flex";
                setTimeout(function() { CurrentElement.style.translate = "0" }, 50);
            }, i * 100); // i * 200 will create a delay that increases with each iteration
        }
    }
}

function applyAlternateBackgroundColors() {
    const boxOuterElements = document.querySelectorAll('.box-outer');

    let isOdd = true; // To track odd and even elements

    boxOuterElements.forEach(element => {
        // Check if the element is displayed (not "display: none")
        if (window.getComputedStyle(element).getPropertyValue('display') !== 'none') {
            // Apply background color based on odd/even
            if (isOdd) {
                element.style.backgroundColor = 'var(--box-outer-background-dark-1)';
            } else {
                element.style.backgroundColor = 'var(--box-outer-background-dark-2)';
            }
            isOdd = !isOdd; // Toggle odd/even for the next element
        }
    });
}

try {
    const invertButton = document.querySelector('.invert-button');
const content = document.body
var isDark = true;

invertButton.addEventListener('click', () => {
    if (isDark) {
        invertButton.innerHTML = `<svg version="1.1" id="_x36_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path style="fill:#F0EEDB;" d="M90.822,60.408c105.574-92.296,264.984-76,357.28,29.574s84.138,262.286-21.436,354.583 S158.688,529.26,66.392,423.687S-14.752,152.704,90.822,60.408z"></path> <path style="fill:#EBE9D2;" d="M107.702,89.331c99.918-87.352,248.823-74.176,333.823,23.051s75.389,243.385-24.528,330.736 c-99.918,87.352-251.733,82.319-336.733-14.909S7.784,176.683,107.702,89.331z"></path> <g> <path style="fill:#D4D5B1;" d="M244.034,141.578C226.114,178.849,181.001,192.92,143.73,175 c-37.271-17.92-53.236-61.358-35.316-98.629c17.92-37.271,62.836-54.047,100.107-36.127 C245.792,58.164,261.954,104.307,244.034,141.578z"></path> <path style="opacity:0.06;fill:#040000;" d="M128.089,97.737c17.92-37.271,62.836-54.047,100.107-36.127 c4.127,1.984,7.995,4.316,11.586,6.943c-7.335-11.909-17.951-21.909-31.261-28.309c-37.271-17.92-82.187-1.144-100.107,36.127 c-15.805,32.873-5.247,70.539,23.036,91.267C118.965,147.179,116.792,121.234,128.089,97.737z"></path> </g> <path style="fill:#D4D5B1;" d="M217.126,218.456c-1.17-5.733,2.71-11.178,8.442-12.348c5.733-1.17,11.248,2.359,12.418,8.092 s-2.456,11.466-8.189,12.636C224.065,228.005,218.296,224.189,217.126,218.456z"></path> <path style="opacity:0.5;fill:#FFFFFF;" d="M363.159,97.031c-1.17-5.733,2.71-11.178,8.442-12.348s11.248,2.359,12.418,8.092 c1.17,5.733-2.456,11.466-8.189,12.636C370.097,106.581,364.328,102.764,363.159,97.031z"></path> <path style="fill:#D4D5B1;" d="M282.758,398.482c8.691-7.598,21.813-6.256,29.411,2.434c7.598,8.691,6.926,21.591-1.765,29.189 c-8.691,7.598-22.06,6.972-29.658-1.719C273.149,419.697,274.067,406.08,282.758,398.482z"></path> <path style="opacity:0.5;fill:#FFFFFF;" d="M58.328,221.051c-1.17-5.733,2.71-11.178,8.442-12.348 c5.733-1.17,11.248,2.359,12.418,8.092c1.17,5.733-2.456,11.466-8.189,12.636C65.267,230.6,59.498,226.784,58.328,221.051z"></path> <path style="fill:#D4D5B1;" d="M468.957,281.792c-3.725,36.65-37.257,62.1-73.907,58.374c-36.65-3.725-63.179-35.28-59.453-71.93 c3.725-36.65,36.273-64.306,72.923-60.581C445.17,211.381,472.683,245.142,468.957,281.792z"></path> <g> <path style="fill:#D4D5B1;" d="M173.243,331.228c14.631,25.328,4.867,57.296-20.461,71.927 c-25.328,14.631-57.072,6.642-71.703-18.687c-14.631-25.328-6.526-58.259,18.802-72.89 C125.209,296.946,158.611,305.899,173.243,331.228z"></path> <path style="opacity:0.06;fill:#040000;" d="M112.82,324.421c18.464-10.666,41.211-8.787,57.856,2.82 c-15.693-22.239-46.848-29.497-70.796-15.664c-25.328,14.631-33.433,47.562-18.802,72.89c4.04,6.993,9.388,12.657,15.541,16.895 c-0.915-1.299-1.789-2.644-2.602-4.052C79.387,371.983,87.492,339.052,112.82,324.421z"></path> </g> <path style="opacity:0.06;fill:#040000;" d="M349.708,282.184c3.725-36.65,36.272-64.306,72.923-60.581 c12.217,1.242,23.416,5.824,32.783,12.736c-11.007-14.534-27.695-24.731-46.895-26.682c-36.65-3.725-69.197,23.931-72.922,60.581 c-2.465,24.248,8.316,46.262,26.507,59.465C352.784,315.151,347.977,299.219,349.708,282.184z"></path> </g> <path style="opacity:0.1;fill:#040000;" d="M254.816,381.8c-105.36,0-198.423-52.065-254.726-131.657 C-2.613,349.865,55.643,444.482,154.03,486.89c128.776,55.508,279.654,1.534,335.162-127.242 c15.267-35.419,21.657-72.749,20.289-109.419C453.171,329.772,360.138,381.8,254.816,381.8z"></path> </g> </g></svg>`
        isDark = false
    }
    else {
        invertButton.innerHTML = `<svg version="1.1" id="_x36_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path style="fill:#C9B997;" d="M258.373,448.122c-11.783,0-21.337,1.395-21.337,18.136c0,8.131,9.553,45.742,21.337,45.742 c11.784,0,21.336-37.611,21.336-45.742C279.709,449.518,270.156,448.122,258.373,448.122z"></path> <path style="fill:#C9B997;" d="M352.653,422.86c-10.205,5.891-17.78,11.876-9.41,26.374c4.065,7.041,31.144,34.837,41.349,28.945 c10.205-5.892-0.328-43.241-4.393-50.282C371.829,413.4,362.858,416.968,352.653,422.86z"></path> <path style="fill:#C9B997;" d="M448.046,344.432c-14.498-8.37-20.483-0.795-26.375,9.41c-5.892,10.205-9.46,19.176,5.038,27.546 c7.041,4.065,44.39,14.598,50.282,4.393C482.883,375.576,455.087,348.497,448.046,344.432z"></path> <path style="fill:#C9B997;" d="M465.07,238.225c-16.741,0-18.136,9.553-18.136,21.337c0,11.784,1.396,21.336,18.136,21.336 c8.13,0,45.742-9.553,45.742-21.336C510.812,247.777,473.2,238.225,465.07,238.225z"></path> <path style="fill:#C9B997;" d="M426.71,137.735c-14.498,8.37-10.93,17.341-5.038,27.546c5.892,10.204,11.877,17.78,26.375,9.41 c7.041-4.065,34.837-31.144,28.945-41.349C471.099,123.137,433.75,133.67,426.71,137.735z"></path> <path style="fill:#C9B997;" d="M164.092,422.86c-10.205-5.892-19.176-9.46-27.546,5.038c-4.065,7.041-14.598,44.39-4.393,50.282 c10.205,5.892,37.283-21.904,41.349-28.945C181.872,434.737,174.297,428.752,164.092,422.86z"></path> <path style="fill:#C9B997;" d="M424.226,259.561c0-45.799-18.564-87.263-48.577-117.276L141.097,376.837 c30.013,30.013,71.477,48.578,117.276,48.578C349.971,425.415,424.226,351.159,424.226,259.561z"></path> </g> <g> <path style="fill:#E5DC90;" d="M164.11,96.239c-10.143,5.855-19.05,9.401-27.297-4.618c-0.082-0.083-0.165-0.247-0.248-0.412 c-4.123-7.009-14.596-44.367-4.453-50.305c7.669-4.454,25.07,10.308,34.719,20.781c3.298,3.464,5.69,6.433,6.68,8.164 C181.84,84.364,174.336,90.384,164.11,96.239z"></path> <g> <path style="fill:#E5DC90;" d="M279.729,52.861v0.577c-0.248,16.164-9.732,17.566-21.359,17.566 c-9.319,0-17.236-0.907-20.122-9.483c-0.824-2.227-1.237-5.113-1.237-8.66c0-5.03,3.629-21.276,9.154-32.987 c3.546-7.257,7.752-12.782,12.205-12.782c1.319,0,2.639,0.495,3.876,1.402C272.225,15.174,279.729,45.604,279.729,52.861z"></path> <path style="fill:#E5DC90;" d="M95.085,165.264c-5.938,10.226-11.875,17.813-26.39,9.401 c-3.958-2.227-14.432-11.793-21.854-21.524c-0.082-0.083-0.165-0.165-0.165-0.248c-5.69-7.504-9.484-15.091-6.928-19.545 c5.938-10.226,43.213,0.33,50.305,4.371c1.237,0.742,2.391,1.484,3.381,2.226C103.909,147.699,100.445,155.945,95.085,165.264z"></path> <path style="fill:#E5DC90;" d="M69.85,259.524c0,11.546-1.32,21.03-17.236,21.359h-0.907c-7.834,0-43.13-8.907-45.605-20.122 c-0.082,0-0.082,0-0.082,0c0-0.412-0.083-0.824-0.083-1.237c0-4.536,5.69-8.824,13.112-12.205 c11.711-5.525,27.709-9.071,32.657-9.071c4.701,0,8.164,0.742,10.721,2.062C69.108,243.773,69.85,251.113,69.85,259.524z"></path> <path style="fill:#E5DC90;" d="M68.7,344.432c-7.041,4.065-34.837,31.144-28.945,41.349c5.892,10.205,43.241-0.328,50.281-4.393 c14.498-8.37,10.93-17.341,5.038-27.546C89.183,343.637,83.197,336.062,68.7,344.432z"></path> <path style="fill:#E5DC90;" d="M352.653,96.263c10.205,5.892,19.176,9.46,27.546-5.038c4.065-7.041,14.598-44.39,4.393-50.282 c-10.205-5.892-37.284,21.904-41.349,28.945C334.873,84.386,342.448,90.371,352.653,96.263z"></path> <path style="fill:#E5DC90;" d="M258.373,93.708c-91.598,0-165.853,74.255-165.853,165.853 c0,45.799,18.563,87.262,48.577,117.276l234.552-234.552C345.635,112.271,304.172,93.708,258.373,93.708z"></path> </g> </g> </g> <g> <path style="fill:#F3E2A6;" d="M252.408,440.964c-11.783,0-21.337,1.395-21.337,18.136c0,8.131,9.553,45.742,21.337,45.742 s21.336-37.611,21.336-45.742C273.744,442.36,264.191,440.964,252.408,440.964z"></path> <path style="fill:#F3E2A6;" d="M346.688,415.702c-10.205,5.892-17.78,11.877-9.41,26.375c4.065,7.041,31.144,34.837,41.349,28.945 c10.205-5.892-0.328-43.241-4.393-50.282C365.864,406.242,356.893,409.81,346.688,415.702z"></path> <path style="fill:#F3E2A6;" d="M442.081,337.274c-14.498-8.37-20.483-0.795-26.375,9.41c-5.892,10.205-9.46,19.176,5.038,27.546 c7.041,4.065,44.39,14.598,50.282,4.393C476.918,368.418,449.122,341.339,442.081,337.274z"></path> <path style="fill:#F3E2A6;" d="M459.105,231.066c-16.741,0-18.136,9.553-18.136,21.337c0,11.784,1.395,21.336,18.136,21.336 c8.13,0,45.742-9.553,45.742-21.336C504.846,240.619,467.235,231.066,459.105,231.066z"></path> <path style="fill:#F3E2A6;" d="M420.744,130.577c-14.497,8.37-10.93,17.341-5.038,27.546c5.892,10.205,11.877,17.78,26.375,9.41 c7.041-4.065,34.837-31.144,28.945-41.349C465.134,115.979,427.785,126.511,420.744,130.577z"></path> <path style="fill:#F3E2A6;" d="M158.127,415.702c-10.205-5.892-19.176-9.46-27.546,5.038c-4.065,7.041-14.598,44.39-4.392,50.282 c10.205,5.892,37.283-21.904,41.349-28.945C175.907,427.578,168.332,421.594,158.127,415.702z"></path> <path style="fill:#F3E2A6;" d="M418.261,252.403c0-45.799-18.564-87.263-48.577-117.276L135.132,369.679 c30.014,30.013,71.477,48.578,117.276,48.578C344.006,418.257,418.261,344.001,418.261,252.403z"></path> </g> <g> <path style="fill:#FBEEB9;" d="M158.09,89.065c-7.67,4.453-14.679,7.587-21.277,2.557c-2.144-1.567-4.206-4.041-6.268-7.587 c-4.041-7.01-14.597-44.367-4.371-50.223c9.814-5.69,34.967,19.545,40.657,27.874c0.33,0.412,0.577,0.742,0.742,1.072 C175.903,77.189,168.316,83.209,158.09,89.065z"></path> <g> <path style="fill:#FBEEB9;" d="M273.709,45.687c0,0.577,0,1.155-0.083,1.65c-0.577,15.174-9.814,16.493-21.194,16.493 c-4.288,0-8.247-0.165-11.628-1.237c-0.907-0.247-1.732-0.659-2.556-1.072c-2.722-1.402-4.866-3.711-6.02-7.422 c-0.083-0.083,0-0.083,0-0.083c-0.742-2.227-1.155-5.03-1.155-8.329c0-4.865,3.464-20.452,8.824-32.08 c3.216-7.01,7.175-12.617,11.381-13.442C251.69,0.083,252.02,0,252.432,0c3.547,0,6.927,3.463,9.814,8.494 c0.99,1.649,1.897,3.464,2.804,5.443C270.328,25.482,273.709,40.904,273.709,45.687z"></path> <path style="fill:#FBEEB9;" d="M89.147,158.09c-5.937,10.226-11.875,17.813-26.39,9.484c-2.969-1.732-9.648-7.505-15.916-14.432 c-0.082-0.083-0.165-0.165-0.165-0.248c-8.577-9.401-16.246-20.864-12.865-26.719c5.855-10.226,43.213,0.33,50.222,4.371 c5.195,3.051,8.164,6.185,9.401,9.401C95.662,145.637,92.858,151.658,89.147,158.09z"></path> <path style="fill:#FBEEB9;" d="M63.83,252.432c0,11.793-1.402,21.277-18.142,21.277H45.44c-5.03-0.083-20.122-3.382-31.503-8.577 c-2.886-1.402-5.608-2.804-7.835-4.371c-0.082,0-0.082,0-0.082,0C2.309,258.205,0,255.401,0,252.432c0-0.33,0-0.742,0.165-1.072 c0.742-4.041,5.69-7.669,12.04-10.886c11.793-5.608,28.451-9.401,33.482-9.401c1.897,0,3.629,0.165,5.196,0.412 c6.762,0.99,9.978,4.288,11.545,8.824c0.412,1.072,0.66,2.309,0.825,3.546C63.748,246.412,63.83,249.381,63.83,252.432z"></path> <path style="fill:#FBEEB9;" d="M84.034,374.237c-5.196,3.051-27.379,9.649-40.739,8.576c-1.567-0.083-2.969-0.33-4.288-0.742 c-2.392-0.66-4.206-1.815-5.195-3.464c-0.908-1.567-1.072-3.629-0.577-5.855c2.804-12.206,23.503-32.08,29.523-35.461 c2.969-1.732,5.608-2.804,7.917-3.216c7.917-1.732,12.453,2.969,16.659,9.566c0.577,0.99,1.237,1.979,1.814,3.051 c2.062,3.711,3.959,7.175,4.701,10.556C95.25,363.268,93.353,368.876,84.034,374.237z"></path> <path style="fill:#FBEEB9;" d="M346.688,89.104c10.205,5.892,19.176,9.46,27.546-5.038c4.065-7.041,14.598-44.39,4.393-50.282 c-10.205-5.892-37.284,21.904-41.349,28.945C328.908,77.228,336.483,83.213,346.688,89.104z"></path> <path style="fill:#FBEEB9;" d="M369.701,135.164l-0.743,0.742l-3.381,3.381L135.164,369.701 c-2.474-2.474-4.783-4.948-7.092-7.587c-6.185-7.009-11.793-14.514-16.741-22.513c-15.668-25.318-24.74-55.171-24.74-87.168 c0-91.621,74.221-165.842,165.842-165.842c29.936,0,58.057,7.917,82.385,21.936C347.6,115.784,359.31,124.773,369.701,135.164z"></path> </g> </g> </g> </g></svg>`
        isDark = true
    }
    invertButton.classList.toggle('box-icon-invert');
    document.querySelector(".search-bar").classList.toggle('box-icon-invert');

    content.classList.toggle('inverted');
    
    // Get all elements with the class "box-outer"
    const boxOuterElements = document.querySelectorAll('.box-outer');
    
    // Loop through each ".box-outer" element
    for (let i = 0; i < boxOuterElements.length; i++) {
        const boxOuter = boxOuterElements[i];
    
        // Toggle class for .box-outer (opacity)
        boxOuter.classList.toggle("opacity");
    
        // Toggle class for .box-title and .menu-title
        const boxTitle = boxOuter.querySelector('.box-title');
        const menuTitle = boxOuter.querySelector('.menu-title');
        if (boxTitle) {
            boxTitle.classList.toggle('box-title-invert');
        }
        if (menuTitle) {
            menuTitle.classList.toggle('box-title-invert');
        }
    
        // Toggle class for .box-arrow and .menu-arrow
        const boxArrow = boxOuter.querySelector('.box-arrow');
        const menuArrow = boxOuter.querySelector('.menu-arrow');
        if (boxArrow) {
            boxArrow.classList.toggle('box-arrow-invert');
        }
        if (menuArrow) {
            menuArrow.classList.toggle('box-arrow-invert');
        }
    
        // Toggle class for .box-icon and .menu-icon
        const boxIcon = boxOuter.querySelector('.box-icon');
        const menuIcon = boxOuter.querySelector('.menu-icon');
        if (boxIcon) {
            boxIcon.classList.toggle('box-icon-invert');
        }
        if (menuIcon) {
            menuIcon.classList.toggle('box-icon-invert');
        }
    }
    var menuElements = document.querySelectorAll(".menu");
    for (let i = 0; i < menuElements.length; i++) {
        const menuElement = menuElements[i];
        menuElement.classList.toggle("opacity");
    }
});
}
catch{}

var Menus = [
    {Type: "box", Emoji: "🤖", Title: "AI Chatbot", Color: "#cdc4d6", MenuID: 0, OnclickID: 1, Link: "pages/special/chatbot/"},

    {Type: "box", Emoji: "📊", Title: "Maths", Color: "#E1D8EC", MenuID: 0, OnclickID: 2},
    {Type: "menu-direct", Emoji: "🔢", Title: "Law of Indices", MenuID: 2, OnclickID: 10, Link: "pages/maths/indices/"},
    {Type: "menu", Emoji: "∛", Title: "Surds", MenuID: 2, OnclickID: 11},
    {Type: "menu-direct", Emoji: "📖", Title: "Surds - Overview", MenuID: 11, OnclickID: 31, Link: "pages/maths/surds-overview/"},
    {Type: "menu-direct", Emoji: "½", Title: "Rationalising Surds", MenuID: 11, OnclickID: 32, Link: "pages/maths/rationalising-surds/"},
    {Type: "menu-direct", Emoji: "(x)(y)", Title: "Expanding Brackets", MenuID: 2, OnclickID: 26, Link: "pages/maths/expanding-brackets/"},
    {Type: "menu-direct", Emoji: "🧭", Title: "Bearings", MenuID: 2, OnclickID: 50, Link: "pages/maths/bearings/"},
    {Type: "menu", Emoji: "📈", Title: "Lines", MenuID: 2, OnclickID: 54},
    {Type: "menu-direct", Emoji: "📈", Title: "Equation of a line", MenuID: 54, OnclickID: 55, Link: "pages/maths/equation-of-a-line/"},
    {Type: "menu-direct", Emoji: "🗠", Title: "Equation from 2 points", MenuID: 54, OnclickID: 56, Link: "pages/maths/equation-from-2-points/"},
    {Type: "menu-direct", Emoji: "📉", Title: "X and Y intercepts", MenuID: 54, OnclickID: 57, Link: "pages/maths/x-y-intercept/"},
    {Type: "menu-direct", Emoji: "📊", Title: "Parallel lines", MenuID: 54, OnclickID: 58, Link: "pages/maths/parallel-lines/"},
    {Type: "menu-direct", Emoji: "❌", Title: "Perpendicular lines", MenuID: 54, OnclickID: 59, Link: "pages/maths/perpendicular-lines/"},
    {Type: "menu-direct", Emoji: "🧮", Title: "Simultaneous Equations", MenuID: 2, OnclickID: 60, Link: "pages/maths/sim-equations/"},
    {Type: "menu", Emoji: "⌒", Title: "Quadratics", MenuID: 2, OnclickID: 80},
    {Type: "menu-direct", Emoji: "🟩", Title: "Quadratic Equations Overview", MenuID: 80, OnclickID: 81, Link: "pages/maths/quadratic-equation-overview/"},
    {Type: "menu-direct", Emoji: "⏹️", Title: "Factorising Quadratics with a Coefficient of 1", MenuID: 80, OnclickID: 82, Link: "pages/maths/factorising-one-x/"},
    {Type: "menu-direct", Emoji: "🟦", Title: "Factorising Quadratics with a Coefficient of more than 1", MenuID: 80, OnclickID: 83, Link: "pages/maths/factorising-more-x/"},
    {Type: "menu-direct", Emoji: "🔲", Title: "Completing the Square with a Coefficient of 1", MenuID: 80, OnclickID: 84, Link: "pages/maths/completing-square-one-x/"},
    {Type: "menu-direct", Emoji: "⬛", Title: "Completing the Square with a Coefficient of more than 1", MenuID: 80, OnclickID: 85, Link: "pages/maths/completing-square-more-x/"},
    {Type: "menu", Emoji: "📉", Title: "Graphing", MenuID: 2, OnclickID: 114},
    {Type: "menu-direct", Emoji: "⌒", Title: "Graphing Inequalities", MenuID: 114, OnclickID: 115, Link: "pages/maths/graphing-inequalities/"},
    {Type: "menu-direct", Emoji: "∼", Title: "Graph Types", MenuID: 114, OnclickID: 116, Link: "pages/maths/graph-types/"},

    {Type: "box", Emoji: "🚀", Title: "Further Maths", Color: "#F92F60", MenuID: 0, OnclickID: 33},
    {Type: "link-direct", Emoji: "║", Title: "Desmos", MenuID: 33, OnclickID: 77, Link: "https://www.desmos.com/calculator/"},
    {Type: "menu", Emoji: "📈", Title: "Binomial Expansion", MenuID: 33, OnclickID: 34},
    {Type: "menu-direct", Emoji: "ⓘ", Title: "Binomial Expansion - Overview", MenuID: 34, OnclickID: 35, Link: "pages/maths+/binomial-expansion/"},
    {Type: "menu-direct", Emoji: "△", Title: "Pascals Triangle - Info", MenuID: 34, OnclickID: 36, Link: "pages/maths+/pascals-triangle/"},
    {Type: "menu-direct", Emoji: "▲", Title: "Pascals Triangle - Visual", MenuID: 34, OnclickID: 37, Link: "pages/maths+/pascals-triangle-visual/"},
    {Type: "menu", Emoji: "▼", Title: "Trigonometric Periodicity", MenuID: 33, OnclickID: 69},
    {Type: "menu-direct", Emoji: "Θ", Title: "Sin", MenuID: 69, OnclickID: 70, Link: "pages/maths+/sin/"},
    {Type: "menu-direct", Emoji: "Θ", Title: "Cos", MenuID: 69, OnclickID: 71, Link: "pages/maths+/cos/"},
    {Type: "menu-direct", Emoji: "Θ", Title: "Tan", MenuID: 69, OnclickID: 72, Link: "pages/maths+/tan/"},
    {Type: "link-direct", Emoji: "║", Title: "Desmos - Trigonometry", MenuID: 69, OnclickID: 73, Link: "https://www.desmos.com/calculator/lkautkqylz"},
    {Type: "menu", Emoji: "x", Title: "Polynomials", MenuID: 33, OnclickID: 86},
    {Type: "menu-direct", Emoji: "÷", Title: "Polynomial Long division", MenuID: 86, OnclickID: 87, Link: "pages/maths+/polynomial-long-division/"},
    {Type: "menu-direct", Emoji: "📉", Title: "Finding the Roots of Cubic graphs", MenuID: 86, OnclickID: 88, Link: "pages/maths+/roots-of-cubic-graphs/"},
    {Type: "menu", Emoji: "▲", Title: "Trigonometric Equations", MenuID: 33, OnclickID: 111},
    {Type: "menu-direct", Emoji: "△", Title: "Unit Triangle", MenuID: 111, OnclickID: 112, Link: "pages/maths+/unit-triangle/"},
    {Type: "menu-direct", Emoji: "θ", Title: "Solving for x", MenuID: 111, OnclickID: 113, Link: "pages/maths+/solving-for-trig/"},


    {Type: "box", Emoji: "🦠", Title: "Biology", Color: "#00F397", MenuID: 0, OnclickID: 3},
    {Type: "menu", Emoji: "🧫", Title: "Cell Division", MenuID: 3, OnclickID: 13},
    {Type: "menu-direct", Emoji: "🧬", Title: "Mitosis", MenuID: 13, OnclickID: 14, Link: "pages/biology/mitosis/"},
    {Type: "menu-direct", Emoji: "🦠", Title: "Cytokinesis", MenuID: 13, OnclickID: 15, Link: "pages/biology/cytokinesis/"},
    {Type: "menu-direct", Emoji: "🦠", Title: "Stem Cells", MenuID: 3, OnclickID: 16, Link: "pages/biology/stem-cells/"},
    {Type: "menu", Emoji: "🍪", Title: "Enzymes", MenuID: 3, OnclickID: 47},
    {Type: "menu-direct", Emoji: "🍟", Title: "Enzymes Overview and Info", MenuID: 47, OnclickID: 68, Link: "pages/biology/enzyme-info/"},
    {Type: "menu-direct", Emoji: "🌮", Title: "Main Digestive Enzymes", MenuID: 47, OnclickID: 48, Link: "pages/biology/main-digestive-enzymes/"},
    {Type: "menu-direct", Emoji: "🌯", Title: "Enzymes - Lock and Key", MenuID: 47, OnclickID: 66, Link: "pages/biology/enzyme-lock-and-key/"},
    {Type: "menu-direct", Emoji: "🥞", Title: "Enzymes - Induced Fit", MenuID: 47, OnclickID: 67, Link: "pages/biology/enzyme-induced-fit/"},
    {Type: "menu-direct", Emoji: "🍔", Title: "The Digestive Organ System", MenuID: 3, OnclickID: 65, Link: "pages/biology/digestive-organ-system/"},
    {Type: "menu-direct", Emoji: "🫀", Title: "Blood Vessels", MenuID: 3, OnclickID: 89, Link: "pages/biology/blood-vessels/"},


    {Type: "box", Emoji: "⚗️", Title: "Chemistry", Color: "#aeddff", MenuID: 0, OnclickID: 4},
    {Type: "menu", Emoji: "🪢", Title: "Bonds", MenuID: 4, OnclickID: 74},
    {Type: "menu-direct", Emoji: "⚛️", Title: "Ionic Bonds", MenuID: 74, OnclickID: 27, Link: "pages/chemistry/ionic-bonds/"},
    {Type: "menu-direct", Emoji: "⚛️", Title: "Covalent Bonds", MenuID: 74, OnclickID: 38, Link: "pages/chemistry/covalent-bonds/"},
    {Type: "menu-direct", Emoji: "⚛️", Title: "Metallic Bonds", MenuID: 74, OnclickID: 75, Link: "pages/chemistry/metallic-bonds/"},
    {Type: "menu-direct", Emoji: "⚪", Title: "Covalent Structures", MenuID: 4, OnclickID: 52, Link: "pages/chemistry/covalent-structures/"},
    {Type: "menu-direct", Emoji: "🔴", Title: "Allotropes", MenuID: 4, OnclickID: 53, Link: "pages/chemistry/allotropes/"},
    {Type: "menu", Emoji: "🧪", Title: "Chemical Reactions", MenuID: 4, OnclickID: 90},
    {Type: "menu-direct", Emoji: "🧂", Title: "Neutralization Reactions", MenuID: 90, OnclickID: 91, Link: "pages/chemistry/neutralization-reaction/"},
    {Type: "menu-direct", Emoji: "🔀", Title: "Displacement Reactions", MenuID: 90, OnclickID: 92, Link: "pages/chemistry/displacement-reaction/"},


    {Type: "box", Emoji: "🧲", Title: "Physics", Color: "#F8312F", MenuID: 0, OnclickID: 5},
    {Type: "menu-direct", Emoji: "📦", Title: "Formula Sheet", MenuID: 5, OnclickID: 51, Link: "pages/physics/formula-storage/"},
    {Type: "menu", Emoji: "🔥", Title: "Heat / Energy transfer", MenuID: 5, OnclickID: 19},
    {Type: "menu-direct", Emoji: "💥", Title: "Infra-red radiation", MenuID: 19, OnclickID: 20, Link: "pages/physics/infra-red-radiation/"},
    {Type: "menu-direct", Emoji: "🔥", Title: "Conduction", MenuID: 19, OnclickID: 21, Link: "pages/physics/conduction/"},
    {Type: "menu-direct", Emoji: "💨", Title: "Convection", MenuID: 19, OnclickID: 22, Link: "pages/physics/convection/"},
    {Type: "menu-direct", Emoji: "♨️", Title: "Specific Heat Capacity", MenuID: 5, OnclickID: 49, Link: "pages/physics/specific-heat-capacity/"},
    {Type: "menu-direct", Emoji: "⚡", Title: "Energy Sources", MenuID: 5, OnclickID: 93, Link: "pages/physics/energy-sources/"},


    {Type: "box", Emoji: "🖥️", Title: "Computing", Color: "#26c9fc", MenuID: 0, OnclickID: 6},
    {Type: "menu", Emoji: "🖥️", Title: "Tools", MenuID: 6, OnclickID: 98},
    {Type: "link-direct", Emoji: "🥷", Title: "Know It All Ninja", MenuID: 98, OnclickID: 79, Link: "https://www.knowitallninja.com"},
    {Type: "link-direct", Emoji: "🧠", Title: "Smart Revise", MenuID: 98, OnclickID: 80, Link: "https://smartrevise.online"},
    {Type: "menu-direct", Emoji: "🖥️", Title: "Python IDE", MenuID: 98, OnclickID: 64, Link: "pages/computing/python-ide/"},
    {Type: "menu-direct", Emoji: "📦", Title: "Data Storage", MenuID: 6, OnclickID: 9, Link: "pages/computing/data-storage/"},
    {Type: "menu", Emoji: "µ", Title: "Unit Conversion", MenuID: 6, OnclickID: 44},
    {Type: "menu-direct", Emoji: "✨", Title: "Denary ⇆ Binary", MenuID: 44, OnclickID: 45, Link: "pages/computing/denary-binary/"},
    {Type: "menu-direct", Emoji: "✨", Title: "Denary ⇆ Hexidecimal", MenuID: 44, OnclickID: 46, Link: "pages/computing/denary-hex/"},
    {Type: "menu", Emoji: "01", Title: "Binary Arithmetic", MenuID: 6, OnclickID: 39},
    {Type: "menu-direct", Emoji: "+01", Title: "Binary Addition", MenuID: 39, OnclickID: 40, Link: "pages/computing/binary-addition/"},
    {Type: "menu-direct", Emoji: "-01", Title: "Binary Subtraction", MenuID: 39, OnclickID: 41, Link: "pages/computing/binary-subtraction/"},
    {Type: "menu-direct", Emoji: "←01→", Title: "Binary Shifting", MenuID: 39, OnclickID: 42, Link: "pages/computing/binary-shifting/"},
    {Type: "menu-direct", Emoji: "01?", Title: "Binary Overflow", MenuID: 39, OnclickID: 43, Link: "pages/computing/binary-overflow/"},
    {Type: "menu", Emoji: "📦", Title: "Specific Storage", MenuID: 6, OnclickID: 94},
    {Type: "menu-direct", Emoji: "🔤", Title: "Storing Text", MenuID: 94, OnclickID: 95, Link: "pages/computing/storing-text/"},
    {Type: "menu-direct", Emoji: "🖼️", Title: "Storing Images", MenuID: 94, OnclickID: 96, Link: "pages/computing/storing-images/"},
    {Type: "menu-direct", Emoji: "🔊", Title: "Storing Audio", MenuID: 94, OnclickID: 97, Link: "pages/computing/storing-audio/"},


    {Type: "box", Emoji: "🌍", Title: "Geography", Color: "#00d26a", MenuID: 0, OnclickID: 7},
    {Type: "menu-direct", Emoji: "🗺", Title: "Map Game", MenuID: 7, OnclickID: 130, Link: "pages/geography/map-game/"},
    {Type: "menu-direct", Emoji: "🏞️", Title: "Continental Drift & Tectonic Plates", MenuID: 7, OnclickID: 25, Link: "pages/geography/continental-drift/"},
    {Type: "menu", Emoji: "🌪️", Title: "Natural Disasters", MenuID: 7, OnclickID: 99},
    {Type: "menu", Emoji: "⛰️", Title: "Earthquakes", MenuID: 99, OnclickID: 28},
    {Type: "menu-direct", Emoji: "🏞️", Title: "Overview", MenuID: 28, OnclickID: 29, Link: "pages/geography/earthquake-overview/"},
    {Type: "menu-direct", Emoji: "🏞️", Title: "LIC vs HIC", MenuID: 28, OnclickID: 30, Link: "pages/geography/earthquake-lic-hic/"},
    {Type: "menu-direct", Emoji: "🌀", Title: "Hurricanes", MenuID: 99, OnclickID: 78, Link: "pages/geography/hurricanes/"},
    {Type: "menu-direct", Emoji: "🌋", Title: "Volcanoes", MenuID: 99, OnclickID: 100, Link: "pages/geography/volcanoes/"},
    {Type: "menu-direct", Emoji: "💨", Title: "Atmospheric Air Circulation and Wind Cells", MenuID: 7, OnclickID: 68, Link: "pages/geography/air-circulation-and-cells/"},
    {Type: "menu-direct", Emoji: "🗺", Title: "Plate Margins", MenuID: 7, OnclickID: 101, Link: "pages/geography/plate-margins/"},

    
    {Type: "box", Emoji: "📜", Title: "History", Color: "#FFDEA7", MenuID: 0, OnclickID: 102},
    {Type: "menu", Emoji: "💊", Title: "Medicine through Time", MenuID: 102, OnclickID: 106},
    {Type: "menu-direct", Emoji: "🏰", Title: "Medieval", MenuID: 106, OnclickID: 107, Link: "pages/history/medicine-medieval/"},
    {Type: "menu-direct", Emoji: "🎭", Title: "Renaissance", MenuID: 106, OnclickID: 108, Link: "pages/history/medicine-renaissance/"},
    {Type: "menu-direct", Emoji: "🏭", Title: "Industrial", MenuID: 106, OnclickID: 109, Link: "pages/history/medicine-industrial/"},
    {Type: "menu-direct", Emoji: "📡", Title: "Modern", MenuID: 106, OnclickID: 110, Link: "pages/history/medicine-modern/"},


    {Type: "box", Emoji: "⚒️", Title: "D.T.", Color: "#B4ACBC", MenuID: 0, OnclickID: 103},
    {Type: "menu", Emoji: "📦", Title: "Paper and Board", MenuID: 103, OnclickID: 117},
    {Type: "menu-direct", Emoji: "🧱", Title: "Structure", MenuID: 117, OnclickID: 118, Link: "pages/dt/paper-and-board-structure/"},
    {Type: "menu-direct", Emoji: "📰", Title: "Different Types", MenuID: 117, OnclickID: 119, Link: "pages/dt/paper-and-board-different-types/"},
    {Type: "menu-direct", Emoji: "✨", Title: "Uses and Applications", MenuID: 117, OnclickID: 120, Link: "pages/dt/paper-and-board-uses-and-applications/"},
    {Type: "menu-direct", Emoji: "🦾", Title: "Manufacturing Process", MenuID: 117, OnclickID: 121, Link: "pages/dt/paper-and-board-manufacturing-process/"},
    {Type: "menu-direct", Emoji: "⚒️", Title: "Innovations and Trends", MenuID: 117, OnclickID: 122, Link: "pages/dt/paper-and-board-innovations-and-trends/"},
    {Type: "menu-direct", Emoji: "⚡", Title: "Laser Cutting", MenuID: 103, OnclickID: 123, Link: "pages/dt/laser-cutting/"},

    
    {Type: "box", Emoji: "🌐", Title: "Spanish", Color: "#83CBFF", MenuID: 0, OnclickID: 104},
    {Type: "menu-direct", Emoji: "🤖", Title: "Spanish Chatbot", MenuID: 104, OnclickID: 124, Link: "pages/special/spanish-chatbot/"},
    {Type: "menu-direct", Emoji: "🧑", Title: "Pronouns", MenuID: 104, OnclickID: 125, Link: "pages/spanish/spanish-pronouns/"},
    {Type: "menu", Emoji: "🏃", Title: "Verbs", MenuID: 104, OnclickID: 126},
    {Type: "menu-direct", Emoji: "⌛", Title: "Past", MenuID: 126, OnclickID: 127, Link: "pages/spanish/verbs-past/"},
    {Type: "menu-direct", Emoji: "📱", Title: "Present", MenuID: 126, OnclickID: 128, Link: "pages/spanish/verbs-present/"},
    {Type: "menu-direct", Emoji: "🛸", Title: "Future", MenuID: 126, OnclickID: 129, Link: "pages/spanish/verbs-future/"},


    {Type: "box", Emoji: "📖", Title: "English", Color: "#F3EEF8", MenuID: 0, OnclickID: 61},
    {Type: "menu-direct", Emoji: "🤖", Title: "Writing Review Bot", MenuID: 61, OnclickID: 62, Link: "pages/english/essay-bot/"},
    {Type: "menu", Emoji: "🕵️", Title: "An Inspector Calls", MenuID: 61, OnclickID: 105},
    {Type: "menu-direct", Emoji: "🔎", Title: "An Inspector Calls", MenuID: 105, OnclickID: 63, Link: "pages/english/an-inspector-calls/"},
    {Type: "menu-direct", Emoji: "📒", Title: "An Inspector Calls PDF", MenuID: 105, OnclickID: 63, Link: "pages/english/an-inspector-calls-study-guide/"},


    {Type: "box", Emoji: "✏️", Title: "Notepad", Color: "#E1742A", MenuID: 0, OnclickID: 8, Link: "pages/special/notepad/"},
]

AllTopics = []
HighestNumber = 0
function MakeMenu() {
    for (let i = 0; i < Menus.length; i++) {
        let CurrentMenu = Menus[i];

        let Outer = document.createElement("div");
        let Icon = document.createElement("div");
        let Title = document.createElement("div");
        let Arrow = document.createElement("div");

        Arrow.textContent = "➜"

        if (CurrentMenu.Type === "box") {
            Outer.classList.add(CurrentMenu.Type + "-outer");
            Icon.classList.add(CurrentMenu.Type + "-icon");
            Title.classList.add(CurrentMenu.Type + "-title");
            Arrow.classList.add(CurrentMenu.Type + "-arrow");
        }
        else {
            Outer.classList.add("menu");
            Icon.classList.add("menu-icon");
            Title.classList.add("menu-title");
            Arrow.classList.add("menu-arrow");
        }
        if (CurrentMenu.Type === "menu-direct" || CurrentMenu.Title == "AI Chatbot" || CurrentMenu.Title == "Notepad") {
            Outer.onclick = function() {
                window.open(CurrentMenu.Link + "index.html", "_self")
            }
            Arrow.textContent = "📄"
        }
        else if (CurrentMenu.Type === "link-direct") {
            Outer.onclick = function() {
                window.open(CurrentMenu.Link, "_self")
            }
            Arrow.textContent = "✈️"
        }
        else {
            Outer.onclick = function() {
                OpenMenu(`${CurrentMenu.OnclickID}`, this)
            }
        }
        if (CurrentMenu.Type === "menu-direct") {
            AllTopics.push(CurrentMenu.Title)
        }
        if (CurrentMenu.OnclickID > HighestNumber) { HighestNumber = CurrentMenu.OnclickID }

        Icon.textContent = CurrentMenu.Emoji;
        Title.textContent = CurrentMenu.Title;
        Title.style.color = CurrentMenu.Color
        Arrow.style.color = CurrentMenu.Color

        Outer.setAttribute("menu-id", CurrentMenu.MenuID)
        Outer.setAttribute("menu-onclick", CurrentMenu.OnclickID)
        

        Outer.appendChild(Icon);
        Outer.appendChild(Title);
        Outer.appendChild(Arrow);
        document.querySelector(".box-container").appendChild(Outer);
    }
}
MakeMenu()
console.log(AllTopics)
console.log(HighestNumber)
applyAlternateBackgroundColors();
const elements = document.querySelectorAll('[menu-id]'); // adds spacing
const lastElements = {};
elements.forEach(element => {
    const menuId = element.getAttribute('menu-id');
    const lastDigit = menuId.charAt(menuId.length - 1);
    lastElements[lastDigit] = element;
});
for (const lastDigit in lastElements) {
    if (lastElements.hasOwnProperty(lastDigit)) {
        lastElements[lastDigit].style.marginBottom = "20px";
    }
}

function findPathToMenu(Menus, targetOnclickID) {
    const path = [];

    function findPathRecursive(currentOnclickID) {
    if (currentOnclickID === 0) {
        return; // Reached the top-level menu, terminate recursion
    }

    for (const menuItem of Menus) {
        if (menuItem.OnclickID === currentOnclickID) {
            path.unshift([menuItem.MenuID, menuItem.OnclickID]);
            findPathRecursive(menuItem.MenuID);
            return; // Terminate recursion after finding the menu
        }
    }
}

    findPathRecursive(targetOnclickID);
    if (document.querySelector(".search-bar").value.length > 0) {
        for (let i = 0; i < path.length; i++) {
            OpenMenu(path[i][0])
            
            document.querySelector(`div[menu-onclick="${path[i][1]}"]`).classList.add("menu-hover");
            if (i === path.length - 1) {
                document.querySelector(`div[menu-onclick="${path[i][1]}"]`).classList.add("menu-hover-no-tilt");
                document.querySelector(`div[menu-onclick="${path[i][1]}"]`).classList.add("menu-search");
            }
        }
    }
    OpenMenu(targetOnclickID)

    return path;
}

// Add an event listener to your input box
const inputBox = document.querySelector(".search-bar"); // Replace with the actual class name of your input box

document.addEventListener("keydown", function (event) {
    // Check if the key pressed is a letter or a valid character for the search query
    if (/^[a-zA-Z0-9\s]+$/.test(event.key)) {
        // If it is, focus on the input box
        inputBox.focus();
    }
});

inputBox.addEventListener("input", function () {
    const inputValue = inputBox.value.toLowerCase(); // Convert input value to lowercase for case-insensitive matching
    const menuItems = document.querySelectorAll(".menu-hover");

    for (const menuItem of menuItems) {
        menuItem.classList.remove("menu-hover");
    }
    const menuElements = document.querySelectorAll(".menu-search");

    menuElements.forEach((currentElement, i) => {
        currentElement.classList.remove("menu-search");
    });

    for (const menuItem of Menus) {
        if (menuItem.Title.toLowerCase().includes(inputValue)) {
            findPathToMenu(Menus, menuItem.OnclickID);
            console.log(menuItem.OnclickID);
        }
    }
});