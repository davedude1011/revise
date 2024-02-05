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
                    setTimeout(AlternateBackgroundColors, 60)
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
                    setTimeout(AlternateBackgroundColors, 60)
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
                setTimeout(AlternateBackgroundColors, 60)
                setTimeout(function() { CurrentElement.style.translate = "0" }, 50);
            }, i * 100); // i * 200 will create a delay that increases with each iteration
        }
    }
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
    {Type: "menu", Emoji: "⌒", Title: "Factorising", MenuID: 80, OnclickID: 223},
    {Type: "menu-direct", Emoji: "⏹️", Title: "coefficient of 1", MenuID: 223, OnclickID: 82, Link: "pages/maths/factorising-one-x/"},
    {Type: "menu-direct", Emoji: "🟦", Title: "Coefficient of more than 1", MenuID: 223, OnclickID: 83, Link: "pages/maths/factorising-more-x/"},
    {Type: "menu", Emoji: "⌒", Title: "Completing the square", MenuID: 80, OnclickID: 224},
    {Type: "menu-direct", Emoji: "🔲", Title: "Coefficient of 1", MenuID: 224, OnclickID: 84, Link: "pages/maths/completing-square-one-x/"},
    {Type: "menu-direct", Emoji: "⬛", Title: "Coefficient of more than 1", MenuID: 224, OnclickID: 85, Link: "pages/maths/completing-square-more-x/"},
    {Type: "menu-direct", Emoji: "±", Title: "Quadratic Formula", MenuID: 80, OnclickID: 181, Link: "pages/maths/quadratic-formula/"},
    {Type: "menu", Emoji: "📉", Title: "Graphing", MenuID: 2, OnclickID: 114},
    {Type: "menu-direct", Emoji: "⌒", Title: "Graphing Inequalities", MenuID: 114, OnclickID: 115, Link: "pages/maths/graphing-inequalities/"},
    {Type: "menu-direct", Emoji: "∼", Title: "Graph Types", MenuID: 114, OnclickID: 116, Link: "pages/maths/graph-types/"},
    {Type: "menu", Emoji: "➡️", Title: "Circles", MenuID: 2, OnclickID: 329},
    {Type: "menu", Emoji: "🔍", Title: "Basic Circle Concepts", MenuID: 329, OnclickID: 330},
    {Type: "menu-direct", Emoji: "🔄", Title: "Circle Definition", MenuID: 330, OnclickID: 337, Link: "pages/maths/circles/circle-definition/"},
    {Type: "menu-direct", Emoji: "📏", Title: "Radius and Diameter", MenuID: 330, OnclickID: 338, Link: "pages/maths/circles/radius-and-diameter/"},
    {Type: "menu-direct", Emoji: "🔄", Title: "Circumference and Area Formulas", MenuID: 330, OnclickID: 339, Link: "pages/maths/circles/circuference-and-area-formulas/"},
    {Type: "menu", Emoji: "📐", Title: "Circle Theorems", MenuID: 329, OnclickID: 331},
    {Type: "menu-direct", Emoji: "📐", Title: "Inscribed Angles", MenuID: 331, OnclickID: 340, Link: "pages/maths/circles/inscribed-angles/"},
    {Type: "menu-direct", Emoji: "🔴", Title: "Cyclic Quadrilaterals", MenuID: 331, OnclickID: 341, Link: "pages/maths/circles/cyclic-quadrilaterals/"},
    {Type: "menu-direct", Emoji: "🔵", Title: "Tangent-Radius Relationship", MenuID: 331, OnclickID: 342, Link: "pages/maths/circles/tangent-radius-relationship/"},
    {Type: "menu", Emoji: "🔄", Title: "Central Angles and Arcs", MenuID: 329, OnclickID: 332},
    {Type: "menu-direct", Emoji: "📏", Title: "Central Angle Definition", MenuID: 332, OnclickID: 343, Link: "pages/maths/circles/central-angle-definition/"},
    {Type: "menu-direct", Emoji: "🔄", Title: "Arc Length and Measurement", MenuID: 332, OnclickID: 344, Link: "pages/maths/circles/arc-length-and-measurement/"},
    {Type: "menu-direct", Emoji: "📐", Title: "Sectors and Segment Area", MenuID: 332, OnclickID: 345, Link: "pages/maths/circles/sectors-and-segment-area/"},
    {Type: "menu", Emoji: "🔍", Title: "Properties of Chords and Tangents", MenuID: 329, OnclickID: 333},
    {Type: "menu-direct", Emoji: "🔴", Title: "Chords and their Characteristics", MenuID: 333, OnclickID: 346, Link: "pages/maths/circles/chords-and-their-characteristics/"},
    {Type: "menu-direct", Emoji: "🔵", Title: "Tangents and their Properties", MenuID: 333, OnclickID: 348, Link: "pages/maths/circles/tangents-and-their-properties/"},
    {Type: "menu-direct", Emoji: "📏", Title: "Intersecting Chords and Tangents", MenuID: 333, OnclickID: 349, Link: "pages/maths/circles/intersecting-chords-and-tangents/"},
    {Type: "menu", Emoji: "🔄", Title: "Formulas for Circles", MenuID: 329, OnclickID: 334},
    {Type: "menu-direct", Emoji: "📏", Title: "Circumference Formula", MenuID: 334, OnclickID: 350, Link: "pages/maths/circles/circumference-formula/"},
    {Type: "menu-direct", Emoji: "📐", Title: "Area Formula", MenuID: 334, OnclickID: 351, Link: "pages/maths/circles/area-formula/"},
    {Type: "menu-direct", Emoji: "📐", Title: "Sector Area Formula", MenuID: 334, OnclickID: 352, Link: "pages/maths/circles/sector-area-formula/"},
    {Type: "menu-direct", Emoji: "📏", Title: "Segment Area Formula", MenuID: 334, OnclickID: 353, Link: "pages/maths/circles/segment-area-formula/"},
    {Type: "menu", Emoji: "📐", Title: "Coordinate Geometry and Circles", MenuID: 329, OnclickID: 335},
    {Type: "menu-direct", Emoji: "🔄", Title: "Equations of Circles", MenuID: 335, OnclickID: 355, Link: "pages/maths/circles/equations-of-circles/"},
    {Type: "menu-direct", Emoji: "🔴", Title: "Intersecting Circles", MenuID: 335, OnclickID: 356, Link: "pages/maths/circles/intersecting-circles/"},
    {Type: "menu", Emoji: "🔄", Title: "Advanced Circle Concepts", MenuID: 329, OnclickID: 336},
    {Type: "menu-direct", Emoji: "🔍", Title: "Three-Dimensional Geometry with Circles", MenuID: 336, OnclickID: 357, Link: "pages/maths/circles/three-dimensional-geometry-with-circles/"},
    {Type: "menu-direct", Emoji: "🔄", Title: "Conic Sections and Circles", MenuID: 336, OnclickID: 358, Link: "pages/maths/circles/conic-sections-and-circles/"},
    {Type: "menu", Emoji: "🔵", Title: "Circle Theorems", MenuID: 2, OnclickID: 487},
    {Type: "menu", Emoji: "🔍", Title: "Introduction to Circle Theorems", MenuID: 487, OnclickID: 488},
    {Type: "menu-direct", Emoji: "📘", Title: "Definition of Circle Theorems", MenuID: 488, OnclickID: 491, Link: "pages/maths/circle-theorems/definition-of-circle-theorems/"},
    {Type: "menu-direct", Emoji: "🔑", Title: "Importance and Applications in Geometry", MenuID: 488, OnclickID: 492, Link: "pages/maths/circle-theorems/importance-of-circle-theorems-in-geometry/"},
    {Type: "menu", Emoji: "🔢", Title: "Eight Main Circle Theorems", MenuID: 487, OnclickID: 489},
    {Type: "menu-direct", Emoji: "➡️", Title: "Central angle is twice the inscribed angle", MenuID: 489, OnclickID: 493, Link: "pages/maths/circle-theorems/central-angle-twice-inscribed-angle/"},
    {Type: "menu-direct", Emoji: "🔄", Title: "Angles in the same segment are equal", MenuID: 489, OnclickID: 494, Link: "pages/maths/circle-theorems/angles-in-the-same-segment-are-equal/"},
    {Type: "menu-direct", Emoji: "⏭️", Title: "Opposite angles in cyclic quadrilateral sum to 180°", MenuID: 489, OnclickID: 495, Link: "pages/maths/circle-theorems/opposite-angles-in-cyclic-quadrilateral-sum-to-180/"},
    {Type: "menu-direct", Emoji: "🔲", Title: "Tangent-radius angle is 90°", MenuID: 489, OnclickID: 497, Link: "pages/maths/circle-theorems/tangent-radius-angle-is-90/"},
    {Type: "menu-direct", Emoji: "↔️", Title: "Angle between tangents and chord", MenuID: 489, OnclickID: 499, Link: "pages/maths/circle-theorems/angle-between-tangents-and-chord/"},
    {Type: "menu", Emoji: "🧠", Title: "Skills and Proofs", MenuID: 487, OnclickID: 490},
    {Type: "menu-direct", Emoji: "📐", Title: "Using Properties of Parallel Lines", MenuID: 490, OnclickID: 451, Link: "pages/maths/circle-theorems/using-properties-of-parallel-lines/"},
    {Type: "menu-direct", Emoji: "🔺", Title: "Using Triangle Properties", MenuID: 490, OnclickID: 452, Link: "pages/maths/circle-theorems/using-triangle-properties/"},
    {Type: "menu-direct", Emoji: "🔼", Title: "Using Angle Properties of Circles", MenuID: 490, OnclickID: 453, Link: "pages/maths/circle-theorems/using-angle-properties-of-circles/"},
    {Type: "menu-direct", Emoji: "🎯", Title: "Problem-Solving Strategies for Circle Theorem Questions", MenuID: 490, OnclickID: 454, Link: "pages/maths/circle-theorems/problem-solving-strategies-for-circle-theorem-questions/"},
    

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
    {Type: "menu-direct", Emoji: "📈", Title: "Triple Simultaneous Equations", MenuID: 33, OnclickID: 157, Link: "pages/maths+/triple-sim-equations/"},
    {Type: "menu-direct", Emoji: "f(x)", Title: "Functions", MenuID: 33, OnclickID: 203, Link: "pages/maths+/functions/"},
    {Type: "menu", Emoji: "📊", Title: "Matrices", MenuID: 33, OnclickID: 225},
    {Type: "menu", Emoji: "📘", Title: "Introduction to Matrices", MenuID: 225, OnclickID: 226},
    {Type: "menu-direct", Emoji: "❓", Title: "Definition and Basic Properties", MenuID: 226, OnclickID: 235, Link: "pages/maths+/matrices/definition/"},
    {Type: "menu-direct", Emoji: "🔍", Title: "Matrix Notation", MenuID: 226, OnclickID: 236, Link: "pages/maths+/matrices/notation/"},
    {Type: "menu", Emoji: "🧮", Title: "Matrix Operations", MenuID: 225, OnclickID: 227},
    {Type: "menu-direct", Emoji: "➕➖", Title: "Addition and Subtraction", MenuID: 227, OnclickID: 237, Link: "pages/maths+/matrices/addition-subtraction/"},
    {Type: "menu-direct", Emoji: "✖️", Title: "Scalar Multiplication", MenuID: 227, OnclickID: 238, Link: "pages/maths+/matrices/scalar-multiplication/"},
    {Type: "menu-direct", Emoji: "✖️", Title: "Matrix Multiplication", MenuID: 227, OnclickID: 239, Link: "pages/maths+/matrices/matrix-multiplication/"},
    {Type: "menu", Emoji: "🔷", Title: "Special Matrices", MenuID: 225, OnclickID: 228},
    {Type: "menu-direct", Emoji: "🔄", Title: "Identity Matrix", MenuID: 228, OnclickID: 240, Link: "pages/maths+/matrices/identity-matrix/"},
    {Type: "menu-direct", Emoji: "0️⃣", Title: "Zero Matrix", MenuID: 228, OnclickID: 241, Link: "pages/maths+/matrices/zero-matrix/"},
    {Type: "menu-direct", Emoji: "🔳", Title: "Diagonal Matrix", MenuID: 228, OnclickID: 242, Link: "pages/maths+/matrices/diagonal-matrix/"},
    {Type: "menu", Emoji: "🔍", Title: "Determinants", MenuID: 225, OnclickID: 229},
    {Type: "menu-direct", Emoji: "Δ", Title: "Calculating Determinants", MenuID: 229, OnclickID: 243, Link: "pages/maths+/matrices/calculating-determinants/"},
    {Type: "menu-direct", Emoji: "🔍", Title: "Properties of Determinants", MenuID: 229, OnclickID: 244, Link: "pages/maths+/matrices/determinants-properties/"},
    {Type: "menu", Emoji: "🔄", Title: "Matrix Inverses", MenuID: 225, OnclickID: 230},
    {Type: "menu-direct", Emoji: "🔄", Title: "Finding Inverses", MenuID: 230, OnclickID: 245, Link: "pages/maths+/matrices/finding-inverses/"},
    {Type: "menu-direct", Emoji: "🔄", Title: "Properties of Inverses", MenuID: 230, OnclickID: 227, Link: "pages/maths+/matrices/inverses-properties/"},
    {Type: "menu", Emoji: "🔍", Title: "Systems of Linear Equations", MenuID: 225, OnclickID: 231},
    {Type: "menu-direct", Emoji: "🔄", Title: "Matrix Formulation", MenuID: 231, OnclickID: 246, Link: "pages/maths+/matrices/matrix-formulation/"},
    {Type: "menu-direct", Emoji: "🔄", Title: "Gaussian Elimination", MenuID: 231, OnclickID: 247, Link: "pages/maths+/matrices/gaussian-ellimination/"},
    {Type: "menu-direct", Emoji: "🔄", Title: "Matrix Inversion Method", MenuID: 231, OnclickID: 248, Link: "pages/maths+/matrices/matrix-inversion-method/"},
    {Type: "menu", Emoji: "🔍", Title: "Eigenvalues and Eigenvectors", MenuID: 225, OnclickID: 232},
    {Type: "menu-direct", Emoji: "🔍", Title: "Eigenvalue Problems", MenuID: 232, OnclickID: 249, Link: "pages/maths+/matrices/eigenvalue-problems/"},
    {Type: "menu-direct", Emoji: "🔍", Title: "Applications in Physics and Engineering", MenuID: 232, OnclickID: 250, Link: "pages/maths+/matrices/applications-physics/"},
    {Type: "menu", Emoji: "🔍", Title: "Applications of Matrices", MenuID: 225, OnclickID: 233},
    {Type: "menu-direct", Emoji: "🔍", Title: "Markov Chains", MenuID: 233, OnclickID: 251, Link: "pages/maths+/matrices/markov-chains/"},
    {Type: "menu-direct", Emoji: "🔍", Title: "Transformation Matrices in Geometry", MenuID: 233, OnclickID: 252, Link: "pages/maths+/matrices/transformations/"},
    {Type: "menu-direct", Emoji: "🔍", Title: "Least Squares Regression", MenuID: 233, OnclickID: 253, Link: "pages/maths+/matrices/least-squares-regression/"},
    {Type: "menu", Emoji: "🎓", Title: "Advanced Matrix Concepts (A-level)", MenuID: 225, OnclickID: 234},
    {Type: "menu-direct", Emoji: "📉", Title: "Singular Value Decomposition (SVD)", MenuID: 234, OnclickID: 254, Link: "pages/maths+/matrices/singular-value-decomposition/"},
    {Type: "menu-direct", Emoji: "🔍", Title: "Matrix Factorization Techniques", MenuID: 234, OnclickID: 255, Link: "pages/maths+/matrices/matrix-factorization/"},
    {Type: "menu-direct", Emoji: "🔍", Title: "Applications in Data Science and Computer Science", MenuID: 234, OnclickID: 256, Link: "pages/maths+/matrices/applications-computing/"},


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
    {Type: "menu-direct", Emoji: "🫁", Title: "Lungs", MenuID: 3, OnclickID: 142, Link: "pages/biology/lungs/"},
    {Type: "menu-direct", Emoji: "🪴", Title: "Transpiration", MenuID: 3, OnclickID: 170, Link: "pages/biology/transpiration/"},
    {Type: "menu-direct", Emoji: "🪴", Title: "Translocation", MenuID: 3, OnclickID: 176, Link: "pages/biology/translocation/"},
    {Type: "menu", Emoji: "🦠", Title: "Microbes and Immune Defense", MenuID: 3, OnclickID: 204},
    {Type: "menu", Emoji: "🧫", Title: "Pathogens", MenuID: 204, OnclickID: 205},
    {Type: "menu-direct", Emoji: "🌐", Title: "Overview", MenuID: 205, OnclickID: 206, Link: "pages/biology/pathogens-overview/"},
    {Type: "menu-direct", Emoji: "🦠", Title: "Viruses", MenuID: 205, OnclickID: 207, Link: "pages/biology/pathogens-virus/"},
    {Type: "menu-direct", Emoji: "🧫", Title: "Bacteria", MenuID: 205, OnclickID: 208, Link: "pages/biology/pathogens-bacteria/"},
    {Type: "menu-direct", Emoji: "🍄", Title: "Fungi", MenuID: 205, OnclickID: 209, Link: "pages/biology/pathogens-fungi/"},
    {Type: "menu-direct", Emoji: "🦟", Title: "Parasite", MenuID: 205, OnclickID: 222, Link: "pages/biology/pathogens-parasite/"},
    {Type: "menu", Emoji: "🩸", Title: "Immune System", MenuID: 204, OnclickID: 210},
    {Type: "menu-direct", Emoji: "🌐", Title: "Overview", MenuID: 210, OnclickID: 211, Link: "pages/biology/immune-system-overview/"},
    {Type: "menu-direct", Emoji: "🩸", Title: "White Blood Cells", MenuID: 210, OnclickID: 212, Link: "pages/biology/immune-system-wbc/"},
    {Type: "menu-direct", Emoji: "🧼", Title: "Physical Defences", MenuID: 210, OnclickID: 213, Link: "pages/biology/immune-system-physical-defences/"},
    {Type: "menu-direct", Emoji: "🛡️", Title: "Chemical Defences", MenuID: 210, OnclickID: 214, Link: "pages/biology/immune-system-chemical-defences/"},
    {Type: "menu-direct", Emoji: "🌡️", Title: "Inflammatory response", MenuID: 210, OnclickID: 215, Link: "pages/biology/immune-system-inflammatory-response/"},
    {Type: "menu-direct", Emoji: "💉", Title: "Antibodies and Antigens", MenuID: 210, OnclickID: 216, Link: "pages/biology/immune-system-antibodies-antigens/"},
    {Type: "menu-direct", Emoji: "💉", Title: "Vaccines", MenuID: 210, OnclickID: 217, Link: "pages/biology/immune-system-vaccines/"},
    {Type: "menu", Emoji: "🤒", Title: "Diseases and Disorders", MenuID: 204, OnclickID: 218},
    {Type: "menu-direct", Emoji: "🌐", Title: "Overview", MenuID: 218, OnclickID: 219, Link: "pages/biology/disease-disorder-overview/"},
    {Type: "menu-direct", Emoji: "💉", Title: "Immunodeficiency disorders", MenuID: 218, OnclickID: 220, Link: "pages/biology/disease-disorder-immunodeficiency/"},
    {Type: "menu-direct", Emoji: "🦠", Title: "Autoimmune diseases", MenuID: 218, OnclickID: 221, Link: "pages/biology/disease-disorder-autoimmune/"},


    {Type: "box", Emoji: "⚗️", Title: "Chemistry", Color: "#aeddff", MenuID: 0, OnclickID: 4},
    {Type: "menu", Emoji: "🪢", Title: "Bonds", MenuID: 4, OnclickID: 74},
    {Type: "menu-direct", Emoji: "⚛️", Title: "Ionic Bonds", MenuID: 74, OnclickID: 27, Link: "pages/chemistry/ionic-bonds/"},
    {Type: "menu-direct", Emoji: "⚛️", Title: "Covalent Bonds", MenuID: 74, OnclickID: 38, Link: "pages/chemistry/covalent-bonds/"},
    {Type: "menu-direct", Emoji: "⚛️", Title: "Metallic Bonds", MenuID: 74, OnclickID: 75, Link: "pages/chemistry/metallic-bonds/"},
    {Type: "menu-direct", Emoji: "⚪", Title: "Covalent Structures", MenuID: 4, OnclickID: 52, Link: "pages/chemistry/covalent-structures/"},
    {Type: "menu-direct", Emoji: "🔴", Title: "Allotropes", MenuID: 4, OnclickID: 53, Link: "pages/chemistry/allotropes/"},
    {Type: "menu-direct", Emoji: "📊", Title: "Reactivity Series", MenuID: 4, OnclickID: 156, Link: "pages/chemistry/reactivity-series/"},
    {Type: "menu", Emoji: "🧪", Title: "Chemical Reactions", MenuID: 4, OnclickID: 90},
    {Type: "menu-direct", Emoji: "🧂", Title: "Neutralization Reactions", MenuID: 90, OnclickID: 91, Link: "pages/chemistry/neutralization-reaction/"},
    {Type: "menu-direct", Emoji: "🔀", Title: "Displacement Reactions", MenuID: 90, OnclickID: 92, Link: "pages/chemistry/displacement-reaction/"},
    {Type: "menu", Emoji: "⚛", Title: "Ionic Equations", MenuID: 4, OnclickID: 151},
    {Type: "menu-direct", Emoji: "🔗", Title: "Ionic Compounds", MenuID: 151, OnclickID: 153, Link: "pages/chemistry/ionic-compounds/"},
    {Type: "menu", Emoji: "💨", Title: "Redox Reactions", MenuID: 151, OnclickID: 152},
    {Type: "menu-direct", Emoji: "📉", Title: "Oxidation Reactions", MenuID: 152, OnclickID: 140, Link: "pages/chemistry/oxidation-reaction/"},
    {Type: "menu-direct", Emoji: "📈", Title: "Reduction Reactions", MenuID: 152, OnclickID: 141, Link: "pages/chemistry/reduction-reaction/"},
    {Type: "menu", Emoji: "♾️", Title: "Acids & Alkalies", MenuID: 4, OnclickID: 172},
    {Type: "menu-direct", Emoji: "📏", Title: "PH scale", MenuID: 172, OnclickID: 154, Link: "pages/chemistry/ph-scale/"},
    {Type: "menu-direct", Emoji: "🧪", Title: "Acids", MenuID: 172, OnclickID: 174, Link: "pages/chemistry/acids/"},
    {Type: "menu-direct", Emoji: "🧪", Title: "Alkalies", MenuID: 172, OnclickID: 171, Link: "pages/chemistry/alkali/"},
    {Type: "menu-direct", Emoji: "🔎", Title: "Identifying Acids and Alkalies", MenuID: 172, OnclickID: 175, Link: "pages/chemistry/identifying-acids-and-alkali/"},
    {Type: "menu-direct", Emoji: "🪨", Title: "Extracting Metals", MenuID: 4, OnclickID: 155, Link: "pages/chemistry/extracting-metals/"},
    {Type: "menu-direct", Emoji: "½", Title: "Half Equations", MenuID: 4, OnclickID: 189, Link: "pages/chemistry/half-equations/"},
    {Type: "menu", Emoji: "⚡️", Title: "Electrolysis", MenuID: 4, OnclickID: 307},
    {Type: "menu", Emoji: "📺", Title: "BBC Bitesizes", MenuID: 307, OnclickID: 449},
    {Type: "link-direct", Emoji: "📺", Title: "Electrolysis of molten salts", MenuID: 449, OnclickID: 450, Link: "https://www.bbc.co.uk/bitesize/guides/zcsyw6f/revision/1"},
    {Type: "link-direct", Emoji: "📺", Title: "Extracting aluminium", MenuID: 449, OnclickID: 451, Link: "https://www.bbc.co.uk/bitesize/guides/zhk6pbk/revision/4"},
    {Type: "menu", Emoji: "📚", Title: "Basic Concepts and Refresher", MenuID: 307, OnclickID: 308},
    {Type: "menu-direct", Emoji: "🔍", Title: "Electrolysis Definition", MenuID: 308, OnclickID: 314, Link: "pages/chemistry/electrolysis/electrolysis-definition/"},
    {Type: "menu-direct", Emoji: "🔗", Title: "Half Equations Refresher", MenuID: 308, OnclickID: 315, Link: "pages/chemistry/electrolysis/half-equations-refresher/"},
    {Type: "menu", Emoji: "⚙️", Title: "Electrolysis Setups", MenuID: 307, OnclickID: 309},
    {Type: "menu-direct", Emoji: "🔧", Title: "General Setup Description", MenuID: 309, OnclickID: 316, Link: "pages/chemistry/electrolysis/electrolysis-general-setup/"},
    {Type: "menu-direct", Emoji: "🧪", Title: "Specific Setups for Common Electrolytes", MenuID: 309, OnclickID: 317, Link: "pages/chemistry/electrolysis/electrolysis-specific-setups-for-common-electrolytes/"},
    {Type: "menu", Emoji: "✏️", Title: "Graphite in Electrolysis", MenuID: 307, OnclickID: 310},
    {Type: "menu-direct", Emoji: "📊", Title: "Properties of Graphite", MenuID: 310, OnclickID: 318, Link: "pages/chemistry/electrolysis/properties-of-graphite/"},
    {Type: "menu-direct", Emoji: "🌐", Title: "Applications and Benefits", MenuID: 310, OnclickID: 319, Link: "pages/chemistry/electrolysis/applications-and-benefits-graphite/"},
    {Type: "menu", Emoji: "🔩", Title: "Electrodes and Their Roles", MenuID: 307, OnclickID: 311},
    {Type: "menu-direct", Emoji: "➕", Title: "Anodes and Cathodes", MenuID: 311, OnclickID: 320, Link: "pages/chemistry/electrolysis/anodes-and-cathodes/"},
    {Type: "menu-direct", Emoji: "±", Title: "Anions and Cations", MenuID: 311, OnclickID: 321, Link: "pages/chemistry/electrolysis/anions-and-cations/"},
    {Type: "menu", Emoji: "💧", Title: "Water in Electrolysis", MenuID: 307, OnclickID: 312},
    {Type: "menu-direct", Emoji: "🚰", Title: "Electrolysis of Water", MenuID: 312, OnclickID: 322, Link: "pages/chemistry/electrolysis/electrolysis-of-water/"},
    {Type: "menu-direct", Emoji: "🔥", Title: "Hydrogen and Oxygen Production", MenuID: 312, OnclickID: 323, Link: "pages/chemistry/electrolysis/hydrogen-and-oxygen-production/"},
    {Type: "menu", Emoji: "⚡️", Title: "Conductivity in Electrolysis", MenuID: 307, OnclickID: 313},
    {Type: "menu-direct", Emoji: "📏", Title: "Conductivity Measurement", MenuID: 313, OnclickID: 324, Link: "pages/chemistry/electrolysis/conductivity-measurement/"},
    {Type: "menu-direct", Emoji: "🔄", Title: "Conductivity Relationship to Electrolysis Efficiency", MenuID: 313, OnclickID: 325, Link: "pages/chemistry/electrolysis/conductivity-relationship-to-electrolysis-efficiency/"},
    {Type: "menu", Emoji: "🔥", Title: "Molten Solutions and Water Mix", MenuID: 307, OnclickID: 314},
    {Type: "menu-direct", Emoji: "🌡️", Title: "Why Solutions Need to be Molten or Dissolved", MenuID: 314, OnclickID: 326, Link: "pages/chemistry/electrolysis/why-solutions-need-to-be-molten-or-dissolved/"},
    {Type: "menu-direct", Emoji: "💦", Title: "Role of Water in Electrolysis", MenuID: 314, OnclickID: 327, Link: "pages/chemistry/electrolysis/role-of-water/"},
    {Type: "menu-direct", Emoji: "🔑", Title: "Electrolysis Keywords", MenuID: 307, OnclickID: 328, Link: "pages/chemistry/electrolysis/keywords/"},
    {Type: "menu", Emoji: "⚡️", Title: "Energy Changes and Fuel Cells", MenuID: 4, OnclickID: 452},
    {Type: "menu", Emoji: "🔄", Title: "Introduction to Energy Changes", MenuID: 452, OnclickID: 453},
    {Type: "menu-direct", Emoji: "🔍", Title: "Definition of Energy Changes in Chemical Reactions", MenuID: 453, OnclickID: 463, Link: "pages/chemistry/energy-changes-and-fuel-cells/energy-changes-in-chemical-reactions/"},
    {Type: "menu-direct", Emoji: "💡", Title: "Importance of Understanding Energy Changes", MenuID: 453, OnclickID: 464, Link: "pages/chemistry/energy-changes-and-fuel-cells/importance-of-enegy-changes/"},
    {Type: "menu", Emoji: "🌡️", Title: "Types of Energy Changes", MenuID: 452, OnclickID: 454},
    {Type: "menu-direct", Emoji: "🔥", Title: "Exothermic Reactions", MenuID: 454, OnclickID: 465, Link: "pages/chemistry/energy-changes-and-fuel-cells/exothermic-energy-change/"},
    {Type: "menu-direct", Emoji: "❄️", Title: "Endothermic Reactions", MenuID: 454, OnclickID: 466, Link: "pages/chemistry/energy-changes-and-fuel-cells/endothermic-energy-change/"},
    {Type: "menu-direct", Emoji: "⚠️", Title: "Activation Energy", MenuID: 454, OnclickID: 467, Link: "pages/chemistry/energy-changes-and-fuel-cells/activiation-energy/"},
    {Type: "menu", Emoji: "📉", Title: "Energy Profiles of Reactions", MenuID: 452, OnclickID: 455},
    {Type: "menu-direct", Emoji: "📈", Title: "Reaction Coordinate Diagrams", MenuID: 455, OnclickID: 468, Link: "pages/chemistry/energy-changes-and-fuel-cells/reaction-coordinate-diagrams/"},
    {Type: "menu-direct", Emoji: "🔺", Title: "Enthalpy Changes (ΔH)", MenuID: 455, OnclickID: 469, Link: "pages/chemistry/energy-changes-and-fuel-cells/enthalpy-changes/"},
    {Type: "menu-direct", Emoji: "🔗", Title: "Bond Energy Calculations", MenuID: 455, OnclickID: 470, Link: "pages/chemistry/energy-changes-and-fuel-cells/bond-energy-calculations/"},
    {Type: "menu", Emoji: "⚙️", Title: "Applications of Energy Changes", MenuID: 452, OnclickID: 456},
    {Type: "menu-direct", Emoji: "⚗️", Title: "Chemical Industry Processes", MenuID: 456, OnclickID: 471, Link: "pages/chemistry/energy-changes-and-fuel-cells/chemical-industry-processes-of-energy-changes/"},
    {Type: "menu", Emoji: "⚡️", Title: "Energy Changes in Electrolysis Reactions", MenuID: 452, OnclickID: 457},
    {Type: "menu-direct", Emoji: "🌐", Title: "Overview of Electrolysis", MenuID: 457, OnclickID: 473, Link: "pages/chemistry/energy-changes-and-fuel-cells/electrolysis-overview/"},
    {Type: "menu-direct", Emoji: "🔄", Title: "Energy Changes in Electrolysis", MenuID: 457, OnclickID: 474, Link: "pages/chemistry/energy-changes-and-fuel-cells/energy-changes-in-electrolysis/"},
    {Type: "menu", Emoji: "🔋", Title: "Introduction to Fuel Cells", MenuID: 452, OnclickID: 458},
    {Type: "menu-direct", Emoji: "🔬", Title: "Definition and Function of Fuel Cells", MenuID: 458, OnclickID: 476, Link: "pages/chemistry/energy-changes-and-fuel-cells/definition-and-functions-of-fuel-cells/"},
    {Type: "menu-direct", Emoji: "🔄", Title: "Importance in Energy Conversion", MenuID: 458, OnclickID: 477, Link: "pages/chemistry/energy-changes-and-fuel-cells/importance-in-energy-conversion-fuel-cells/"},
    {Type: "menu", Emoji: "🔧", Title: "Types of Fuel Cells", MenuID: 452, OnclickID: 459},
    {Type: "menu-direct", Emoji: "🔍", Title: "Proton Exchange Membrane Fuel Cells (PEMFC)", MenuID: 459, OnclickID: 478, Link: "pages/chemistry/energy-changes-and-fuel-cells/proton-exchange-membrane-fuel-cells/"},
    {Type: "menu-direct", Emoji: "🔥", Title: "Solid Oxide Fuel Cells (SOFC)", MenuID: 459, OnclickID: 479, Link: "pages/chemistry/energy-changes-and-fuel-cells/solid-oxide-fuel-cells/"},
    {Type: "menu-direct", Emoji: "💧", Title: "Alkaline Fuel Cells (AFC)", MenuID: 459, OnclickID: 480, Link: "pages/chemistry/energy-changes-and-fuel-cells/alkaline-fuel-cells/"},
    {Type: "menu-direct", Emoji: "🔥", Title: "Molten Carbonate Fuel Cells (MCFC)", MenuID: 459, OnclickID: 481, Link: "pages/chemistry/energy-changes-and-fuel-cells/molten-carbonate-fuel-cells/"},
    {Type: "menu", Emoji: "🔄", Title: "Working Principles of Fuel Cells", MenuID: 452, OnclickID: 460},
    {Type: "menu-direct", Emoji: "⚡️", Title: "Electrochemical Reactions", MenuID: 460, OnclickID: 482, Link: "pages/chemistry/energy-changes-and-fuel-cells/electrochemical-reactions-fuel-cells/"},
    {Type: "menu-direct", Emoji: "↔️", Title: "Anode and Cathode Processes", MenuID: 460, OnclickID: 483, Link: "pages/chemistry/energy-changes-and-fuel-cells/anode-and-cathode-processes-fuel-cells/"},
    {Type: "menu-direct", Emoji: "🔬", Title: "Electrolyte Material", MenuID: 460, OnclickID: 484, Link: "pages/chemistry/energy-changes-and-fuel-cells/electrolyte-material-fuel-cells/"},
    {Type: "menu", Emoji: "💡", Title: "Applications of Fuel Cells", MenuID: 452, OnclickID: 461},
    {Type: "menu-direct", Emoji: "🚗", Title: "Transportation (Fuel Cell Vehicles)", MenuID: 461, OnclickID: 484, Link: "pages/chemistry/energy-changes-and-fuel-cells/uses-of-fuel-cells-transportation/"},
    {Type: "menu-direct", Emoji: "🏭", Title: "Stationary Power Generation", MenuID: 461, OnclickID: 485, Link: "pages/chemistry/energy-changes-and-fuel-cells/uses-of-fuel-cells-stationary-power-generation/"},
    {Type: "menu-direct", Emoji: "🔋", Title: "Portable and Micro Fuel Cells", MenuID: 461, OnclickID: 486, Link: "pages/chemistry/energy-changes-and-fuel-cells/uses-of-fuel-cells-portable-and-micro-fuel-cells/"},


    {Type: "box", Emoji: "🧲", Title: "Physics", Color: "#F8312F", MenuID: 0, OnclickID: 5},
    {Type: "menu-direct", Emoji: "📦", Title: "Formula Sheet", MenuID: 5, OnclickID: 51, Link: "pages/physics/formula-storage/"},
    {Type: "menu", Emoji: "🔥", Title: "Heat / Energy transfer", MenuID: 5, OnclickID: 19},
    {Type: "menu-direct", Emoji: "💥", Title: "Infra-red radiation", MenuID: 19, OnclickID: 20, Link: "pages/physics/infra-red-radiation/"},
    {Type: "menu-direct", Emoji: "🔥", Title: "Conduction", MenuID: 19, OnclickID: 21, Link: "pages/physics/conduction/"},
    {Type: "menu-direct", Emoji: "💨", Title: "Convection", MenuID: 19, OnclickID: 22, Link: "pages/physics/convection/"},
    {Type: "menu-direct", Emoji: "♨️", Title: "Specific Heat Capacity", MenuID: 5, OnclickID: 49, Link: "pages/physics/specific-heat-capacity/"},
    {Type: "menu-direct", Emoji: "⚡", Title: "Energy Sources", MenuID: 5, OnclickID: 93, Link: "pages/physics/energy-sources/"},
    {Type: "menu", Emoji: "⚡️", Title: "Electricity", MenuID: 5, OnclickID: 257},
    {Type: "menu", Emoji: "📘", Title: "Basic Concepts", MenuID: 257, OnclickID: 258},
    {Type: "menu-direct", Emoji: "⚡️", Title: "Static Electricity", MenuID: 258, OnclickID: 270, Link: "pages/physics/electricity/static-electricity/"},
    {Type: "menu-direct", Emoji: "🌐", Title: "Current and Voltage", MenuID: 258, OnclickID: 271, Link: "pages/physics/electricity/current-and-voltage/"},
    {Type: "menu-direct", Emoji: "🔧", Title: "Electrical Circuits", MenuID: 258, OnclickID: 272, Link: "pages/physics/electricity/electrical-circuits/"},
    {Type: "menu-direct", Emoji: "⚪", Title: "Conductors and Insulators", MenuID: 258, OnclickID: 273, Link: "pages/physics/electricity/conductors-and-insulators/"},
    {Type: "menu", Emoji: "🔍", Title: "Ohm's Law", MenuID: 257, OnclickID: 259},
    {Type: "menu-direct", Emoji: "📏", Title: "Understanding Resistance", MenuID: 259, OnclickID: 274, Link: "pages/physics/electricity/understanding-resistance/"},
    {Type: "menu-direct", Emoji: "🔢", Title: "Calculations involving Voltage, Current, and Resistance", MenuID: 259, OnclickID: 275, Link: "pages/physics/electricity/calculations-involving-voltage-current-and-resistance/"},
    {Type: "menu", Emoji: "⚙️", Title: "Circuit Components", MenuID: 257, OnclickID: 260},
    {Type: "menu-direct", Emoji: "🔄", Title: "Resistors", MenuID: 260, OnclickID: 276, Link: "pages/physics/electricity/resistors/"},
    {Type: "menu-direct", Emoji: "🔘", Title: "Capacitors", MenuID: 260, OnclickID: 277, Link: "pages/physics/electricity/capacitors/"},
    {Type: "menu-direct", Emoji: "🔵", Title: "Diodes", MenuID: 260, OnclickID: 278, Link: "pages/physics/electricity/diodes/"},
    {Type: "menu", Emoji: "➖", Title: "Series Circuits", MenuID: 257, OnclickID: 261},
    {Type: "menu-direct", Emoji: "➰", Title: "Introduction and Characteristics", MenuID: 261, OnclickID: 279, Link: "pages/physics/electricity/series-circuits-introduction/"},
    {Type: "menu-direct", Emoji: "➗", Title: "Calculations in Series Circuits", MenuID: 261, OnclickID: 280, Link: "pages/physics/electricity/calculations-in-series-circuits/"},
    {Type: "menu", Emoji: "➰", Title: "Parallel Circuits", MenuID: 257, OnclickID: 262},
    {Type: "menu-direct", Emoji: "➖", Title: "Introduction and Characteristics", MenuID: 262, OnclickID: 281, Link: "pages/physics/electricity/parallel-circuits-introduction/"},
    {Type: "menu-direct", Emoji: "🔄", Title: "Calculations in Parallel Circuits", MenuID: 262, OnclickID: 282, Link: "pages/physics/electricity/calculations-in-parallel-circuits/"},
    {Type: "menu", Emoji: "🔌", Title: "Electrical Power", MenuID: 257, OnclickID: 263},
    {Type: "menu-direct", Emoji: "💡", Title: "Power equations", MenuID: 263, OnclickID: 283, Link: "pages/physics/electricity/power-equations/"},
    {Type: "menu-direct", Emoji: "💰", Title: "Electrical Energy and Cost", MenuID: 263, OnclickID: 284, Link: "pages/physics/electricity/electrical-energy-and-cost/"},
    {Type: "menu", Emoji: "🔧", Title: "Magnetic Effects of Current", MenuID: 257, OnclickID: 264},
    {Type: "menu-direct", Emoji: "🔄", Title: "Electromagnetic Induction", MenuID: 264, OnclickID: 285, Link: "pages/physics/electricity/electromagnetic-induction/"},
    {Type: "menu-direct", Emoji: "🧲", Title: "Solenoids and Electromagnets", MenuID: 264, OnclickID: 286, Link: "pages/physics/electricity/solenoids-and-electromagnets/"},
    {Type: "menu", Emoji: "🔄", Title: "AC and DC Currents", MenuID: 257, OnclickID: 265},
    {Type: "menu-direct", Emoji: "↔️", Title: "Alternating Current (AC)", MenuID: 265, OnclickID: 287, Link: "pages/physics/electricity/alternating-current/"},
    {Type: "menu-direct", Emoji: "➡️", Title: "Direct Current (DC)", MenuID: 265, OnclickID: 288, Link: "pages/physics/electricity/direct-current/"},
    {Type: "menu", Emoji: "🏭", Title: "Power Stations", MenuID: 257, OnclickID: 266},
    {Type: "menu-direct", Emoji: "🔄", Title: "Types of Power Stations", MenuID: 266, OnclickID: 289, Link: "pages/physics/electricity/types-of-power-stations/"},
    {Type: "menu-direct", Emoji: "🔧", Title: "Generation and Distribution", MenuID: 266, OnclickID: 290, Link: "pages/physics/electricity/power-stations-generation-and-distribution/"},
    {Type: "menu", Emoji: "🏡", Title: "Electricity in the Home", MenuID: 291, OnclickID: 267},
    {Type: "menu-direct", Emoji: "🔌", Title: "Domestic Circuits", MenuID: 267, OnclickID: 292, Link: "pages/physics/electricity/domestic-circuits/"},
    {Type: "menu-direct", Emoji: "⚠️", Title: "Electrical Safety Measures", MenuID: 267, OnclickID: 293, Link: "pages/physics/electricity/electrical-safety-measures/"},
    {Type: "menu", Emoji: "⚡️", Title: "Static Electricity and Electromagnetic Spectrum", MenuID: 257, OnclickID: 268},
    {Type: "menu-direct", Emoji: "⚡️", Title: "Principles of Static Electricity", MenuID: 268, OnclickID: 294, Link: "pages/physics/electricity/principles-of-static-electricity/"},
    {Type: "menu-direct", Emoji: "🌈", Title: "Electromagnetic Spectrum", MenuID: 268, OnclickID: 295, Link: "pages/physics/electricity/electromagnetic-spectrum/"},
    {Type: "menu", Emoji: "🎓", Title: "Advanced Concepts (A-level)", MenuID: 257, OnclickID: 269},
    {Type: "menu-direct", Emoji: "3️⃣", Title: "Three-Phase Systems", MenuID: 269, OnclickID: 296, Link: "pages/physics/electricity/three-phase-systems/"},
    {Type: "menu-direct", Emoji: "🔧", Title: "Transformers", MenuID: 269, OnclickID: 297, Link: "pages/physics/electricity/transformers/"},
    {Type: "menu-direct", Emoji: "🌐", Title: "Grid Systems and Smart Grids", MenuID: 269, OnclickID: 298, Link: "pages/physics/electricity/grid-systems-and-smart-grid/"},
    {Type: "menu", Emoji: "💪", Title: "Power", MenuID: 5, OnclickID: 177},
    {Type: "menu-direct", Emoji: "💪", Title: "Power", MenuID: 177, OnclickID: 178, Link: "pages/physics/power/"},
    {Type: "menu-direct", Emoji: "🕗", Title: "Efficiency", MenuID: 177, OnclickID: 179, Link: "pages/physics/efficiency/"},
    {Type: "menu-direct", Emoji: "⚖️", Title: "Change in Energy Demand", MenuID: 177, OnclickID: 180, Link: "pages/physics/change-in-energy-demand/"},


    {Type: "box", Emoji: "🖥️", Title: "Computing", Color: "#26c9fc", MenuID: 0, OnclickID: 6},
    {Type: "menu", Emoji: "🖥️", Title: "Tools", MenuID: 6, OnclickID: 98},
    {Type: "link-direct", Emoji: "🥷", Title: "Know It All Ninja", MenuID: 98, OnclickID: 79, Link: "https://www.knowitallninja.com"},
    {Type: "link-direct", Emoji: "🧠", Title: "Smart Revise", MenuID: 98, OnclickID: 80, Link: "https://smartrevise.online"},
    {Type: "menu-direct", Emoji: "🖥️", Title: "Python IDE", MenuID: 98, OnclickID: 64, Link: "pages/computing/python-ide/"},
    {Type: "menu", Emoji: "🐍", Title: "Python Syntax", MenuID: 6, OnclickID: 158},
    {Type: "menu-direct", Emoji: "🖥️", Title: "Variables and Data types", MenuID: 158, OnclickID: 159, Link: "pages/computing/variables/"},
    {Type: "menu-direct", Emoji: "🖥️", Title: "Operators", MenuID: 158, OnclickID: 160, Link: "pages/computing/operators/"},
    {Type: "menu-direct", Emoji: "🖥️", Title: "If Statements", MenuID: 158, OnclickID: 161, Link: "pages/computing/if-statements/"},
    {Type: "menu-direct", Emoji: "🖥️", Title: "Data Structures", MenuID: 158, OnclickID: 162, Link: "pages/computing/data-structure/"},
    {Type: "menu-direct", Emoji: "🖥️", Title: "Functions", MenuID: 158, OnclickID: 163, Link: "pages/computing/functions/"},
    {Type: "menu-direct", Emoji: "🖥️", Title: "For and While Loops", MenuID: 158, OnclickID: 164, Link: "pages/computing/for-and-while-loops/"},
    {Type: "menu-direct", Emoji: "🖥️", Title: "Libraries", MenuID: 158, OnclickID: 165, Link: "pages/computing/libraries/"},
    {Type: "menu-direct", Emoji: "🖥️", Title: "Exception Handling", MenuID: 158, OnclickID: 166, Link: "pages/computing/exception-handling/"},
    {Type: "menu-direct", Emoji: "🖥️", Title: "File Handling", MenuID: 158, OnclickID: 167, Link: "pages/computing/file-handling/"},
    {Type: "menu-direct", Emoji: "🖥️", Title: "Object Oriented Programming", MenuID: 158, OnclickID: 168, Link: "pages/computing/object-oriented-programming/"},
    {Type: "menu-direct", Emoji: "🖥️", Title: "Regular Expression", MenuID: 158, OnclickID: 169, Link: "pages/computing/regular-expression/"},
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
    {Type: "menu-direct", Emoji: "🗜️", Title: "Compression", MenuID: 6, OnclickID: 149, Link: "pages/computing/compression/"},
    {Type: "menu-direct", Emoji: "🏷️", Title: "Metadata", MenuID: 6, OnclickID: 150, Link: "pages/computing/metadata/"},
    {Type: "menu", Emoji: "💻", Title: "Computer Hardware", MenuID: 6, OnclickID: 365},
    {Type: "menu", Emoji: "🔧", Title: "Central Processing Unit", MenuID: 365, OnclickID: 366},
    {Type: "menu-direct", Emoji: "🧠", Title: "CPU Definition and Function", MenuID: 366, OnclickID: 377, "Link": "pages/computing/hardware/cpu-definition-function/"},
    {Type: "menu-direct", Emoji: "🏗️", Title: "CPU Architecture", MenuID: 366, OnclickID: 378, "Link": "pages/computing/hardware/cpu-architecture/"},
    {Type: "menu-direct", Emoji: "📝", Title: "Instruction Set Architecture", MenuID: 366, OnclickID: 379, "Link": "pages/computing/hardware/cpu-instruction-set-architecture/"},
    {Type: "menu-direct", Emoji: "🕰️", Title: "CPU Clock Speed and Cores", MenuID: 366, OnclickID: 380, "Link": "pages/computing/hardware/cpu-clock-speed-and-cores/"},
    {Type: "menu-direct", Emoji: "🔄", Title: "Pipelining and Superscalar Architecture", MenuID: 366, OnclickID: 381, "Link": "pages/computing/hardware/cpu-pipelining-and-superscalar-architecture/"},
    {Type: "menu", Emoji: "🔍", Title: "Cache Memory", MenuID: 365, OnclickID: 367},
    {Type: "menu-direct", Emoji: "🧠", Title: "Cache Types", MenuID: 367, OnclickID: 382, "Link": "pages/computing/hardware/cache-types/"},
    {Type: "menu-direct", Emoji: "🗂️", Title: "Cache Organization", MenuID: 367, OnclickID: 383, "Link": "pages/computing/hardware/cache-organization/"},
    {Type: "menu-direct", Emoji: "🎯", Title: "Cache Hit and Miss", MenuID: 367, OnclickID: 384, "Link": "pages/computing/hardware/cache-hit-and-miss/"},
    {Type: "menu-direct", Emoji: "⚡", Title: "Importance of Cache in CPU Performance", MenuID: 367, OnclickID: 385, "Link": "pages/computing/hardware/importance-of-cache-in-cpu-performance/"},
    {Type: "menu", Emoji: "💾", Title: "Random Access Memory", MenuID: 365, OnclickID: 368},
    {Type: "menu-direct", Emoji: "🧠", Title: "RAM Definition and Function", MenuID: 368, OnclickID: 386, "Link": "pages/computing/hardware/ram-definition-function/"},
    {Type: "menu-direct", Emoji: "💨", Title: "Types of RAM", MenuID: 368, OnclickID: 387, "Link": "pages/computing/hardware/types-of-ram/"},
    {Type: "menu-direct", Emoji: "🕒", Title: "RAM Speed and Latency", MenuID: 368, OnclickID: 388, "Link": "pages/computing/hardware/ram-speed-and-latency/"},
    {Type: "menu-direct", Emoji: "🔄", Title: "Dual and Quad Configurations", MenuID: 368, OnclickID: 389, "Link": "pages/computing/hardware/ram-dual-and-quad-config/"},
    {Type: "menu", Emoji: "📦", Title: "Storage", MenuID: 365, OnclickID: 369},
    {Type: "menu-direct", Emoji: "💾", Title: "Solid State Drives vs. Hard Disk Drives", MenuID: 369, OnclickID: 390, "Link": "pages/computing/hardware/solid-state-drives-vs-hard-disk-drives/"},
    {Type: "menu-direct", Emoji: "🗄️", Title: "Virtual Storage and Virtual Memory", MenuID: 369, OnclickID: 391, "Link": "pages/computing/hardware/virtual-storage-and-virtual-memory/"},
    {Type: "menu-direct", Emoji: "📊", Title: "Storage Hierarchy", MenuID: 369, OnclickID: 392, "Link": "pages/computing/hardware/storage-hierarchy/"},
    {Type: "menu-direct", Emoji: "💿", Title: "Storage Technologies", MenuID: 369, OnclickID: 393, "Link": "pages/computing/hardware/storage-technologies/"},
    {Type: "menu", Emoji: "📀", Title: "Read-Only Memory", MenuID: 365, OnclickID: 370},
    {Type: "menu-direct", Emoji: "🔍", Title: "Purpose and Characteristics", MenuID: 370, OnclickID: 394, "Link": "pages/computing/hardware/rom-purpose-and-characteristics/"},
    {Type: "menu-direct", Emoji: "💽", Title: "Types of ROM", MenuID: 370, OnclickID: 395, "Link": "pages/computing/hardware/types-of-rom/"},
    {Type: "menu-direct", Emoji: "🔧", Title: "Firmware and BIOS", MenuID: 370, OnclickID: 396, "Link": "pages/computing/hardware/rom-firmware-and-bios/"},
    {Type: "menu", Emoji: "🚌", Title: "Buses in Computer Architecture", MenuID: 365, OnclickID: 371},
    {Type: "menu-direct", Emoji: "🚦", Title: "System Bus, Memory Bus, and I/O Bus", MenuID: 371, OnclickID: 397, "Link": "pages/computing/hardware/system-bus-memory-bus-io-bus/"},
    {Type: "menu-direct", Emoji: "💨", Title: "Bus Width and Bus Speed", MenuID: 371, OnclickID: 398, "Link": "pages/computing/hardware/bus-width-and-bus-speed/"},
    {Type: "menu-direct", Emoji: "⚖️", Title: "Bus Arbitration and Bus Mastering", MenuID: 371, OnclickID: 399, "Link": "pages/computing/hardware/bus-arbitration-and-bus-mastering/"},
    {Type: "menu", Emoji: "🗄️", Title: "Registers and Register File", MenuID: 365, OnclickID: 372},
    {Type: "menu-direct", Emoji: "🧠", Title: "Role of Registers in CPU", MenuID: 372, OnclickID: 400, "Link": "pages/computing/hardware/role-of-registers-in-cpu/"},
    {Type: "menu-direct", Emoji: "📁", Title: "Register File Organization", MenuID: 372, OnclickID: 401, "Link": "pages/computing/hardware/register-file-organization/"},
    {Type: "menu-direct", Emoji: "🛠️", Title: "Special-Purpose Registers", MenuID: 372, OnclickID: 402, "Link": "pages/computing/hardware/special-purpose-registers/"},
    {Type: "menu", Emoji: "⚙️", Title: "Instruction Execution Cycle", MenuID: 365, OnclickID: 373},
    {Type: "menu-direct", Emoji: "🔄", Title: "Fetch-Decode-Execute Cycle", MenuID: 373, OnclickID: 403, "Link": "pages/computing/hardware/fetch-decode-execute-cycle/"},
    {Type: "menu-direct", Emoji: "🔢", Title: "Program Counter and Instruction Register", MenuID: 373, OnclickID: 404, "Link": "pages/computing/hardware/program-counter-and-instruction-register/"},
    {Type: "menu-direct", Emoji: "🧰", Title: "Machine Language Instructions", MenuID: 373, OnclickID: 405, "Link": "pages/computing/hardware/machine-language-instructions/"},
    {Type: "menu", Emoji: "⚡", Title: "CPU Performance Factors", MenuID: 365, OnclickID: 374},
    {Type: "menu-direct", Emoji: "🎚️", Title: "Factors Affecting CPU Performance", MenuID: 374, OnclickID: 406, "Link": "pages/computing/hardware/factors-affecting-cpu-performance/"},
    {Type: "menu-direct", Emoji: "📊", Title: "Benchmarking and Performance Metrics", MenuID: 374, OnclickID: 407, "Link": "pages/computing/hardware/cpu-benchmarking-and-performance-metrics/"},
    {Type: "menu", Emoji: "🔄", Title: "Parallel Processing and Multicore CPUs", MenuID: 365, OnclickID: 375},
    {Type: "menu-direct", Emoji: "🔄", Title: "Parallelism in Computing", MenuID: 375, OnclickID: 408, "Link": "pages/computing/hardware/parallelism-in-cpu/"},
    {Type: "menu-direct", Emoji: "🔀", Title: "Multicore CPU Architecture", MenuID: 375, OnclickID: 409, "Link": "pages/computing/hardware/multicore-cpu-architecture/"},
    {Type: "menu", Emoji: "🔌", Title: "Other Aspects", MenuID: 365, OnclickID: 376},
    {Type: "menu-direct", Emoji: "🖥️", Title: "I/O Devices", MenuID: 376, OnclickID: 410, "Link": "pages/computing/hardware/io-devices/"},
    {Type: "menu-direct", Emoji: "💳", Title: "Expansion Slots and Cards", MenuID: 376, OnclickID: 411, "Link": "pages/computing/hardware/expansion-slots-and-cards/"},
    {Type: "menu-direct", Emoji: "🔋", Title: "Power Supply Unit", MenuID: 376, OnclickID: 412, "Link": "pages/computing/hardware/power-supply-unit/"},
    {Type: "menu-direct", Emoji: "❄️", Title: "Cooling Solutions", MenuID: 376, OnclickID: 413, "Link": "pages/computing/hardware/cooling-solutions/"},
    {Type: "menu-direct", Emoji: "🕹️", Title: "Motherboard and Chipset", MenuID: 376, OnclickID: 414, "Link": "pages/computing/hardware/motherboard-and-chipset/"},


    {Type: "box", Emoji: "🌍", Title: "Geography", Color: "#00d26a", MenuID: 0, OnclickID: 7},
    {Type: "menu-direct", Emoji: "🗺", Title: "Map Game", MenuID: 7, OnclickID: 130, Link: "pages/geography/map-game/"},
    {Type: "menu-direct", Emoji: "🏞️", Title: "Continental Drift & Tectonic Plates", MenuID: 7, OnclickID: 25, Link: "pages/geography/continental-drift/"},
    {Type: "menu", Emoji: "🌪️", Title: "Natural Disasters", MenuID: 7, OnclickID: 99},
    {Type: "menu", Emoji: "⛰️", Title: "Earthquakes", MenuID: 99, OnclickID: 28},
    {Type: "menu-direct", Emoji: "🏞️", Title: "Overview", MenuID: 28, OnclickID: 29, Link: "pages/geography/earthquake-overview/"},
    {Type: "menu-direct", Emoji: "🏞️", Title: "LIC vs HIC", MenuID: 28, OnclickID: 30, Link: "pages/geography/earthquake-lic-hic/"},
    {Type: "menu-direct", Emoji: "🌀", Title: "Hurricanes", MenuID: 99, OnclickID: 78, Link: "pages/geography/hurricanes/"},
    {Type: "menu-direct", Emoji: "🌋", Title: "Volcanoes", MenuID: 99, OnclickID: 100, Link: "pages/geography/volcanoes/"},
    {Type: "menu-direct", Emoji: "💨", Title: "Atmospheric Air Circulation and Wind Cells", MenuID: 7, OnclickID: 173, Link: "pages/geography/air-circulation-and-cells/"},
    {Type: "menu-direct", Emoji: "🗺", Title: "Plate Margins", MenuID: 7, OnclickID: 101, Link: "pages/geography/plate-margins/"},
    {Type: "menu", Emoji: "🧊", Title: "Climate Change", MenuID: 7, OnclickID: 182},
    {Type: "menu-direct", Emoji: "🌡️", Title: "Overview", MenuID: 182, OnclickID: 183, Link: "pages/geography/climate-change/"},
    {Type: "menu-direct", Emoji: "🕵️", Title: "Evidence", MenuID: 182, OnclickID: 184, Link: "pages/geography/climate-change-evidence/"},
    {Type: "menu-direct", Emoji: "🌳", Title: "Adaptation", MenuID: 182, OnclickID: 185, Link: "pages/geography/climate-change-adaptation/"},
    {Type: "menu-direct", Emoji: "☁", Title: "Mitigation", MenuID: 182, OnclickID: 186, Link: "pages/geography/climate-change-mitigation/"},
    {Type: "menu", Emoji: "🌊", Title: "Hydrology and River Systems", MenuID: 7, OnclickID: 298},
    {Type: "menu", Emoji: "🍰", Title: "Educakes", MenuID: 298, OnclickID: 359},
    {Type: "link-direct", Emoji: "🍰", Title: "River landscapes - river valleys", MenuID: 359, OnclickID: 360, Link: "https://my.educake.co.uk/my-educake/study-guide/open-book/2746"},
    {Type: "link-direct", Emoji: "🍰", Title: "River landscapes - fluvial landforms 1", MenuID: 359, OnclickID: 361, Link: "https://my.educake.co.uk/my-educake/study-guide/open-book/2747"},
    {Type: "link-direct", Emoji: "🍰", Title: "River landscapes - fluvial landforms 2", MenuID: 359, OnclickID: 362, Link: "https://my.educake.co.uk/my-educake/study-guide/open-book/2748"},
    {Type: "link-direct", Emoji: "🍰", Title: "River landscapes - protection 1", MenuID: 359, OnclickID: 363, Link: "https://my.educake.co.uk/my-educake/study-guide/open-book/2749"},
    {Type: "link-direct", Emoji: "🍰", Title: "River landscapes - protection 2", MenuID: 359, OnclickID: 364, Link: "https://my.educake.co.uk/my-educake/study-guide/open-book/2750"},
    {Type: "menu", Emoji: "🏞️", Title: "River Formation and Features", MenuID: 298, OnclickID: 299},
    {Type: "menu-direct", Emoji: "🔄", Title: "Oxbow Lakes", MenuID: 299, OnclickID: 306, Link: "pages/geography/rivers/oxbow-lakes/"},
    {Type: "menu-direct", Emoji: "💦", Title: "Waterfalls", MenuID: 299, OnclickID: 306, Link: "pages/geography/rivers/waterfalls/"},
    {Type: "menu-direct", Emoji: "🌀", Title: "Meanders and Riverbanks", MenuID: 299, OnclickID: 306, Link: "pages/geography/rivers/meanders-and-riverbanks/"},
    {Type: "menu", Emoji: "🔄", Title: "River Processes and Discharge", MenuID: 298, OnclickID: 300},
    {Type: "menu-direct", Emoji: "🏞️", Title: "Erosion, Transportation, and Deposition", MenuID: 300, OnclickID: 306, Link: "pages/geography/rivers/erosion-transportation-and-deposition/"},
    {Type: "menu-direct", Emoji: "🌊", Title: "Discharge and River Velocity", MenuID: 300, OnclickID: 306, Link: "pages/geography/rivers/discharge-and-river-velocity/"},
    {Type: "menu", Emoji: "🏞️", Title: "River Course and Floodplains", MenuID: 298, OnclickID: 301},
    {Type: "menu-direct", Emoji: "⬆️", Title: "Upper Course Geography", MenuID: 301, OnclickID: 306, Link: "pages/geography/rivers/upper-course-geography/"},
    {Type: "menu-direct", Emoji: "↔️", Title: "Middle Course Geography", MenuID: 301, OnclickID: 306, Link: "pages/geography/rivers/middle-course-geography/"},
    {Type: "menu-direct", Emoji: "⬇️", Title: "Lower Course Geography", MenuID: 301, OnclickID: 306, Link: "pages/geography/rivers/lower-course-geographgy/"},
    {Type: "menu-direct", Emoji: "🌊", Title: "Floodplain Dynamics", MenuID: 301, OnclickID: 306, Link: "pages/geography/rivers/floodplain-dynamics/"},
    {Type: "menu", Emoji: "⚙️", Title: "Engineering Approaches", MenuID: 298, OnclickID: 302},
    {Type: "menu", Emoji: "🛠️", Title: "Hard Engineering Strategies", MenuID: 302, OnclickID: 304},
    {Type: "menu-direct", Emoji: "🏞️", Title: "Dams and Levees", MenuID: 304, OnclickID: 306, Link: "pages/geography/rivers/dams-and-levees/"},
    {Type: "menu-direct", Emoji: "🔄", Title: "Channelization", MenuID: 304, OnclickID: 306, Link: "pages/geography/rivers/channelization/"},
    {Type: "menu-direct", Emoji: "🚧", Title: "Flood Barriers", MenuID: 304, OnclickID: 306, Link: "pages/geography/rivers/flood-barriers/"},
    {Type: "menu", Emoji: "🌱", Title: "Soft Engineering Strategies", MenuID: 302, OnclickID: 305},
    {Type: "menu-direct", Emoji: "🏞️", Title: "Floodplain Zoning", MenuID: 305, OnclickID: 306, Link: "pages/geography/rivers/floodplain-zoning/"},
    {Type: "menu-direct", Emoji: "🌳", Title: "Afforestation", MenuID: 305, OnclickID: 306, Link: "pages/geography/rivers/afforestation/"},
    {Type: "menu-direct", Emoji: "🔄", Title: "River Restoration", MenuID: 305, OnclickID: 306, Link: "pages/geography/rivers/river-restoration/"},
    {Type: "menu", Emoji: "💦", Title: "Flooding Phenomena", MenuID: 298, OnclickID: 303},
    {Type: "menu-direct", Emoji: "🌧️", Title: "Causes and Effects of Flooding", MenuID: 303, OnclickID: 306, Link: "pages/geography/rivers/causes-and-effects-of-flooding/"},
    {Type: "menu-direct", Emoji: "🚨", Title: "Flood Management and Mitigation", MenuID: 303, OnclickID: 306, Link: "pages/geography/rivers/flood-management-and-mitigation/"},

    
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
    {Type: "menu", Emoji: "🔍", Title: "Plastics", MenuID: 103, OnclickID: 415},
    {Type: "menu", Emoji: "📚", Title: "Introduction to Plastics", MenuID: 415, OnclickID: 416},
    {Type: "menu-direct", Emoji: "📖", Title: "Definition of Plastics", MenuID: 416, OnclickID: 423, Link: "pages/dt/plastics/definition-of-plastics/"},
    {Type: "menu-direct", Emoji: "🌐", Title: "Properties of Plastics", MenuID: 416, OnclickID: 424, Link: "pages/dt/plastics/properties-of-plastics/"},
    {Type: "menu-direct", Emoji: "🔍", Title: "Importance and Applications", MenuID: 416, OnclickID: 425, Link: "pages/dt/plastics/importance-and-applications-of-plastics/"},
    {Type: "menu", Emoji: "📊", Title: "Classification of Plastics", MenuID: 415, OnclickID: 417},
    {Type: "menu-direct", Emoji: "🌡️", Title: "Thermoplastics", MenuID: 417, OnclickID: 426, Link: "pages/dt/plastics/thermoplastics/"},
    {Type: "menu-direct", Emoji: "🔧", Title: "Thermosetting Plastics", MenuID: 417, OnclickID: 427, Link: "pages/dt/plastics/thermosetting-plastics/"},
    {Type: "menu-direct", Emoji: "🌱", Title: "Bioplastics", MenuID: 417, OnclickID: 428, Link: "pages/dt/plastics/bioplastics/"},
    {Type: "menu", Emoji: "📐", Title: "Plastics Types", MenuID: 415, OnclickID: 418},
    {Type: "menu-direct", Emoji: "🔵", Title: "Acrylic (Polymethyl Methacrylate)", MenuID: 418, OnclickID: 429, Link: "pages/dt/plastics/acrylic-plastic/"},
    {Type: "menu-direct", Emoji: "🥤", Title: "High-Density Polyethylene (HDPE)", MenuID: 418, OnclickID: 430, Link: "pages/dt/plastics/high-density-polyethylene-plastic/"},
    {Type: "menu-direct", Emoji: "🛢️", Title: "Low-Density Polyethylene (LDPE)", MenuID: 418, OnclickID: 431, Link: "pages/dt/plastics/low-density-polyethylene-plastic/"},
    {Type: "menu-direct", Emoji: "🔄", Title: "Polypropylene (PP)", MenuID: 418, OnclickID: 432, Link: "pages/dt/plastics/polypropylene/"},
    {Type: "menu-direct", Emoji: "💨", Title: "Polyvinyl Chloride (PVC)", MenuID: 418, OnclickID: 433, Link: "pages/dt/plastics/polyvinyl-chloride/"},
    {Type: "menu-direct", Emoji: "🍚", Title: "Polystyrene (PS)", MenuID: 418, OnclickID: 434, Link: "pages/dt/plastics/polystyrene/"},
    {Type: "menu", Emoji: "📊", Title: "Properties and Characteristics", MenuID: 415, OnclickID: 419},
    {Type: "menu-direct", Emoji: "🌐", Title: "Physical Properties", MenuID: 419, OnclickID: 435, Link: "pages/dt/plastics/physical-properties-of-plastics/"},
    {Type: "menu-direct", Emoji: "🔩", Title: "Mechanical Properties", MenuID: 419, OnclickID: 436, Link: "pages/dt/plastics/mechanical-properties-of-plastics/"},
    {Type: "menu-direct", Emoji: "🧪", Title: "Chemical Resistance", MenuID: 419, OnclickID: 437, Link: "pages/dt/plastics/chemical-resistance-of-plastics/"},
    {Type: "menu-direct", Emoji: "🌍", Title: "Environmental Impact", MenuID: 419, OnclickID: 438, Link: "pages/dt/plastics/environmental-impact-of-plastics/"},
    {Type: "menu", Emoji: "⚙️", Title: "Processing Methods", MenuID: 415, OnclickID: 420},
    {Type: "menu-direct", Emoji: "🔧", Title: "Injection Molding", MenuID: 420, OnclickID: 439, Link: "pages/dt/plastics/injection-molding-plastics/"},
    {Type: "menu-direct", Emoji: "🌀", Title: "Extrusion", MenuID: 420, OnclickID: 440, Link: "pages/dt/plastics/extrusion-processing-plastics/"},
    {Type: "menu-direct", Emoji: "💨", Title: "Blow Molding", MenuID: 420, OnclickID: 441, Link: "pages/dt/plastics/blow-molding-plastics/"},
    {Type: "menu-direct", Emoji: "🔲", Title: "Compression Molding", MenuID: 420, OnclickID: 442, Link: "pages/dt/plastics/compression-molding-plastics/"},
    {Type: "menu", Emoji: "♻️", Title: "Recycling and Sustainability", MenuID: 415, OnclickID: 421},
    {Type: "menu-direct", Emoji: "🚯", Title: "Challenges of Plastic Waste", MenuID: 421, OnclickID: 443, Link: "pages/dt/plastics/challanges-of-plastic-waste/"},
    {Type: "menu-direct", Emoji: "♻️", Title: "Recycling Processes and Techniques", MenuID: 421, OnclickID: 444, Link: "pages/dt/plastics/recycling-processes-and-techniques/"},
    {Type: "menu-direct", Emoji: "🌱", Title: "Sustainable Alternatives and Initiatives", MenuID: 421, OnclickID: 445, Link: "pages/dt/plastics/sustainable-alternatives-and-initiatives/"},
    {Type: "menu", Emoji: "🚀", Title: "Future Trends", MenuID: 415, OnclickID: 422},
    {Type: "menu-direct", Emoji: "🌿", Title: "Advances in Biodegradable Plastics", MenuID: 422, OnclickID: 446, Link: "pages/dt/plastics/advances-in-biodegradable-plastics/"},
    {Type: "menu-direct", Emoji: "🔄", Title: "Circular Economy Approaches", MenuID: 422, OnclickID: 447, Link: "pages/dt/plastics/circular-economy-approaches-plastics/"},
    {Type: "menu-direct", Emoji: "🔬", Title: "Emerging Technologies in Plastic Production and Recycling", MenuID: 422, OnclickID: 448, Link: "pages/dt/plastics/emerging-technologies-in-plastic-production-and-recycling/"},

    
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
    {Type: "menu", Emoji: "🎄", Title: "A Christmas Carol", MenuID: 61, OnclickID: 143},
    {Type: "menu-direct", Emoji: "🔔", Title: "Intro", MenuID: 143, OnclickID: 144, Link: "pages/english/christmas-intro/"},
    {Type: "menu-direct", Emoji: "🎅", Title: "Ghost of Christmas Past", MenuID: 143, OnclickID: 145, Link: "pages/english/christmas-past/"},
    {Type: "menu-direct", Emoji: "🎁", Title: "Ghost of Christmas Present", MenuID: 143, OnclickID: 146, Link: "pages/english/christmas-present/"},
    {Type: "menu-direct", Emoji: "🌟", Title: "Ghost of Christmas yet to Come", MenuID: 143, OnclickID: 147, Link: "pages/english/christmas-future/"},
    {Type: "menu-direct", Emoji: "👼", Title: "Outro", MenuID: 143, OnclickID: 148, Link: "pages/english/christmas-outro/"},
    {Type: "menu", Emoji: "🎭", Title: "Macbeth", MenuID: 61, OnclickID: 190},
    {Type: "menu-direct", Emoji: "🔮", Title: "Macbeth - Summary", MenuID: 190, OnclickID: 191, Link: "pages/english/macbeth-summary/"},
    {Type: "menu-direct", Emoji: "🤴🏼", Title: "Macbeth - Character analysis", MenuID: 190, OnclickID: 192, Link: "pages/english/macbeth-character-analysis/"},
    {Type: "menu-direct", Emoji: "🗡️", Title: "Macbeth - Themes", MenuID: 190, OnclickID: 193, Link: "pages/english/macbeth-themes/"},
    {Type: "menu-direct", Emoji: "👑", Title: "Macbeth - Symbolism", MenuID: 190, OnclickID: 194, Link: "pages/english/macbeth-symbolism/"},
    {Type: "menu-direct", Emoji: "📙", Title: "Macbeth - Language", MenuID: 190, OnclickID: 195, Link: "pages/english/macbeth-language/"},
    {Type: "menu-direct", Emoji: "📜", Title: "Macbeth - History", MenuID: 190, OnclickID: 196, Link: "pages/english/macbeth-history/"},
    {Type: "menu-direct", Emoji: "🔎", Title: "Macbeth - Comparison", MenuID: 190, OnclickID: 197, Link: "pages/english/macbeth-comparison/"},


    {Type: "box", Emoji: "🃏", Title: "Flashcards", Color: "#7E5BAE", MenuID: 0, OnclickID: 8, Link: "pages/special/flashcards/"},


    {Type: "box", Emoji: "✏️", Title: "Notepad", Color: "#E1742A", MenuID: 0, OnclickID: 8, Link: "pages/special/notepad/"},
]

AllTopics = []
HighestNumber = 0
let PrevNum = 0
function MakeMenu() {
    for (let i = 0; i < Menus.length; i++) {
        let CurrentMenu = Menus[i];

        let Outer = document.createElement("div");
        let Icon = document.createElement("div");
        let Title = document.createElement("div");
        let Arrow = document.createElement("div");

        if (CurrentMenu.Type == "menu-direct") { Outer.classList.add("menu-direct"); }

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
        if (CurrentMenu.Type === "menu-direct" || CurrentMenu.Title == "AI Chatbot" || CurrentMenu.Title == "Notepad" || CurrentMenu.Title == "Flashcards") {
            Outer.onclick = function() {
                let MiniMenu = CreateMiniMenuArray()
                for (let i = 0; i < MiniMenu.length; i++) {
                    if (MiniMenu[i].Link == CurrentMenu.Link) {
                        localStorage.setItem("PageNumber", i)
                    }
                }
                window.open(CurrentMenu.Link + "index.html", "_self")
            }
            Arrow.textContent = "📄"
        }
        else if (CurrentMenu.Type === "link-direct") {
            Outer.onclick = function() {
                window.open(CurrentMenu.Link, "_self")
            }
            Outer.classList.add("link-direct")
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

        try {
            if (CurrentMenu.MenuID != Menus[i+1].MenuID) {
                Outer.classList.add("margin")
                console.log("hu")
            }
        }
        catch{}


        PrevNum = CurrentMenu.MenuID
    }
}
MakeMenu()
console.log(AllTopics)
console.log(HighestNumber)
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

//.menu:nth-child(odd):not([style*="display: none"]) { background-color: var(--box-outer-background-dark-1); }
//.menu:nth-child(even):not([style*="display: none"]) { background-color: var(--box-outer-background-dark-2); }

function AlternateBackgroundColors() {
    console.log("Alternate background colors")
    let AllMenuItems = document.querySelectorAll('.menu, .box-outer')
    let isOdd = true; // To track odd and even elements
    AllMenuItems.forEach(element => {
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

AlternateBackgroundColors()


function CreateMiniMenuArray() {
    let MiniMenu = []
    for (let i = 0; i < Menus.length; i++) {
        if (Menus[i].Type == "menu-direct") {
            MiniMenu.push({Title: Menus[i].Title, Link: Menus[i].Link})
        }
    }
    return MiniMenu
}
localStorage.setItem("MiniMenu", JSON.stringify(CreateMiniMenuArray()))

console.log(CreateMiniMenuArray())