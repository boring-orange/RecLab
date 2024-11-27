document.getElementById("trainBtn").addEventListener("click", function () {
    toggleModule("train");
});

document.getElementById("recommendBtn").addEventListener("click", function () {
    toggleModule("recommend");
});

function toggleModule(activeModule) {
    const trainModule = document.getElementById("trainModule");
    const recommendModule = document.getElementById("recommendModule");

    if (activeModule === "train") {
        trainModule.classList.add("active");
        trainModule.classList.remove("inactive");
        recommendModule.classList.add("inactive");
        recommendModule.classList.remove("active");
        const train_module_introduce = document.getElementById("train_module_introduce")
        train_module_introduce.style.opacity = "0";
        train_module_introduce.style.width = "0";
        const train_container = document.getElementById("train_container");
        train_container.classList.add("active");
        const rec_module_introduce = document.getElementById("rec_module_introduce")
        rec_module_introduce.style.opacity = "1";
        rec_module_introduce.style.width = "100%";
        const rec_container = document.getElementById("rec_container");
        rec_container.classList.remove("active");
    } else {
        recommendModule.classList.add("active");
        recommendModule.classList.remove("inactive");
        trainModule.classList.add("inactive");
        trainModule.classList.remove("active");
        const train_module_introduce = document.getElementById("train_module_introduce")
        train_module_introduce.style.opacity = "1";
        train_module_introduce.style.width = "100%";
        const rec_module_introduce = document.getElementById("rec_module_introduce")
        rec_module_introduce.style.opacity = "0";
        rec_module_introduce.style.width = "0";
        const train_container = document.getElementById("train_container");
        train_container.classList.remove("active");
        const rec_container = document.getElementById("rec_container");
        rec_container.classList.add("active");

    }
}

new Vue({
    el: "#app",
    data() {
        return {
            show_train: false,
            train_set: {
                lr: '',
                nn: '',
                bs: '',
                cuda: ''
            }
        }
    },
    methods: {
        get_train() {
            console.log("get_train");
            toggleModule('train');
        },
        get_rec() {
            console.log("get_rec");
            toggleModule();
        },
        start_train() {
            console.log(this.train_set);
            let ajax_data = {
                lr: this.train_set.lr,
                bs: this.train_set.bs,
                nn: this.train_set.nn,
                cuda: this.train_set.cuda,
            }
            let ajax_this = this;
                $.ajax({
                    url: 'http://localhost:3389/train_start',
                    type: 'Post',
                    data: ajax_data,
                    success: function (data) {
                        console.log(data);

                    },
                    error: function () {
                    }
                })
        }
    },
    created() {
        console.log("Component created");
    },
    mounted() {
        console.log("Component mounted");
    }
})