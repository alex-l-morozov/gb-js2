Vue.component('error-data', {
    data() {
        return {
            errorMessage: "Не удалось выполнить запрос к серверу",
        }
    },
    template: `
        <div>
            {{errorMessage}}
        </div>
    `
});
