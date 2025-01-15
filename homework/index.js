window.onload = () => {
  console.log("Welcome to Minji's Diary.");
};

const diaryList = [];

const writeDiary = () => {
  // 0. Get current date
  const date = new Date();
  const options = {
    year: date.getFullYear(),
    month: (date.getMonth() + 1).toString().padStart(2, "0"),
    date: date.getDate(),
  };

  // 1-1. Get the diary content
  const dateBox = options.year + "-" + options.month + "-" + options.date;
  const titleBox = window.document.getElementById("title-input").value;
  const contentBox = window.document.getElementById("content-input").value;

  // 1-2. Get the mood selection
  let happyBox =
    window.document.getElementsByName("mood-selection-button")[0].checked ===
    true;
  let sadBox =
    window.document.getElementsByName("mood-selection-button")[1].checked ===
    true;
  let surprisedBox =
    window.document.getElementsByName("mood-selection-button")[2].checked ===
    true;
  let angryBox =
    window.document.getElementsByName("mood-selection-button")[3].checked ===
    true;
  let otherBox =
    window.document.getElementsByName("mood-selection-button")[4].checked ===
    true;

  // 2. Add the diary entry to the diary list
  const diaryBox = {
    title: titleBox,
    content: contentBox,
    date: dateBox,
  };
  diaryList.push(diaryBox);

  // 3. Get the index of the most recently added diary
  const diaryIndex = diaryList.length - 1;

  // 4. Get the existing diary display area
  const existingDiaryDisplay =
    window.document.getElementById("diary-display").innerHTML;

  // 5. Create a new diary entry HTML
  const newDiaryEntry = `
    <div class="diary" onclick="viewDiary(${diaryIndex})">
        <div class="diary-image">
          ${
            happyBox === true
              ? '<img class="mood-image" src="./images/happy.png" alt="happy" />'
              : ""
          }
          ${
            sadBox === true
              ? '<img class="mood-image" src="./images/sad.png" alt="sad" />'
              : ""
          }
          ${
            surprisedBox === true
              ? '<img class="mood-image" src="./images/surprise.png" alt="surprise" />'
              : ""
          }
          ${
            angryBox === true
              ? '<img class="mood-image" src="./images/angry.png" alt="angry" />'
              : ""
          }
          ${
            otherBox === true
              ? '<img class="mood-image" src="./images/other.png" alt="other" />'
              : ""
          }
        </div>
        <div class="diary-content">
          ${happyBox === true ? `<div class="mood happy">I'm happy</div>` : ""}
          ${sadBox === true ? `<div class="mood sad">I'm sad</div>` : ""}
          ${
            surprisedBox === true
              ? `<div class="mood surprised">I'm surprised</div>`
              : ""
          }
          ${angryBox === true ? `<div class="mood angry">I'm angry</div>` : ""}
          ${otherBox === true ? `<div class="mood other">Other</div>` : ""}
          <div class="date">${diaryBox.date}</div>
        </div>
        <div class="diary-title"> ${diaryBox.title}</div>
    </div>
  `;

  // 6. Display the new diary entry along with existing entries
  window.document.getElementById("diary-display").innerHTML =
    existingDiaryDisplay + newDiaryEntry;
};

const viewDiary = (diaryIndex) => {
  const diaryBox = diaryList[diaryIndex];
  const titleBox = diaryBox.title;
  const contentBox = diaryBox.content;

  alert(`
    Title: ${titleBox}
    Content: ${contentBox}       
  `);
};
