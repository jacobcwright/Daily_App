// var login = new Vue({
//     el: '#login',
//     data: {

//     },
//     computed: {

//     },
//     methods: {

//     },
// });

const url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1"
var got = '';
fetch(url)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        // console.log(json);
        let results = "";
        results += json[0].content + "<h3>" + "-" + json[0].title + "</h3";
    document.getElementById("quote").innerHTML = results;
    console.log(json);
    });

var app = new Vue({
    el: '#app',
    data: {
        TodoText: '',
        NoteText: '',
        GoalText: '',
        GratitudeText: '',
        Todos: [],
        Notes: [],
        Goals: [],
        Gratitudes: [],
    },
    computed: {
        ShowNotes() {
            return this.Notes.filter(item => {
                return item;
            });
        }
    },
    methods: {
        AddTodo() {
            if (this.TodoText === '') {
                return;
            } else {
                this.Todos.push({
                    message: this.TodoText
                });
            }
            this.TodoText = '';
        },
        AddNote() {
            if(this.NoteText === '') {
                return;
            }
            else {
            console.log("at addNote");
            this.Notes.push({
                message: this.NoteText
            });
        }
            //Vue.set(Notes, Notes.length, NoteText);
            this.NoteText = '';
        },
        AddGoal() {
            if (this.GoalText === '') {
                return;
            }
            else {
            this.Goals.push({
                message: this.GoalText
            });
        }
            this.GoalText = '';
        },
        AddGratitude() {
            if(this.GratitudeText === ''){
                return;
            }
            else {
            this.Gratitudes.push({
                message: this.GratitudeText
            });
        }
            this.GratitudeText = '';
        },
        ClearTodo() {
            console.log("clear");
            this.Todos = [];
        },
        ClearNote() {
            this.Notes = [];
        },
        ClearGoal() {
            this.Goals = [];
        },
        ClearGratitude() {
            this.Gratitudes = [];
        },
        LoginGo() {
            window.location.replace("layout.html");
        },
    }
});