// Получаем ссылку на список записей
const notesList = document.getElementById("notes-list");
// Получаем ссылку на поле ввода заголовка
const noteTitleInput = document.getElementById("note-title");
// Получаем ссылку на текстовое поле
const noteText = document.getElementById("note-text");
// Получаем ссылку на кнопку "Сохранить"
const saveButton = document.getElementById("save-button");
// Получаем ссылку на кнопку "Очистить записи"
const clearButton = document.getElementById("clear-button");

// Функция для отображения списка записей из localStorage
function displayNotes() {
    notesList.innerHTML = ""; // Очищаем список записей перед обновлением
    // Проходимся по каждой записи в localStorage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i); // Получаем ключ (заголовок записи)
        const note = localStorage.getItem(key); // Получаем значение (текст записи)
        const link = document.createElement("a"); // Создаем элемент <a> для каждой записи
        link.textContent = key; // Устанавливаем текст ссылки как заголовок записи
        link.href = "#"; // Устанавливаем ссылку на хеш-тег
        link.onclick = function () { // Добавляем обработчик события при клике на ссылку
            noteTitleInput.value = key; // Устанавливаем заголовок в поле ввода
            noteText.value = note; // Устанавливаем текст записи в текстовом поле
        };
        notesList.appendChild(link); // Добавляем ссылку в список записей
        notesList.appendChild(document.createElement("br")); // Добавляем перенос строки
    }
}

displayNotes(); // Загрузка списка записей при загрузке страницы

// Обработчик события для кнопки "Сохранить"
saveButton.addEventListener("click", function () {
    const noteTitle = noteTitleInput.value.trim(); // Получаем заголовок из поля ввода
    if (noteTitle && noteText.value.trim() !== "") { // Проверяем, что заголовок и текст не пустые
        localStorage.setItem(noteTitle, noteText.value); // Сохраняем запись в localStorage
        displayNotes(); // Обновляем список записей
        noteTitleInput.value = ""; // Очищаем поле ввода заголовка
        noteText.value = ""; // Очищаем текстовое поле
    } else {
        alert("Пусто"); // Выводим сообщение об ошибке
    }
});

// Обработчик события для кнопки "Очистить записи"
clearButton.addEventListener("click", function () {
    localStorage.clear(); // Очищаем все записи из localStorage
    displayNotes(); // Обновляем список записей
});
