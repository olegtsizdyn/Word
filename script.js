$(document).ready(function () {
    let count = 0;
    let textatea = $("#textarea");
    let bold_state = false;
    let italic_state = false;
    let underline_state = false;
    let strikethrough_state = false;

    $("#textarea").append($('#editor')[0].value);

    // вибір жирності тексту
    $(".bold").click(function () {
        if (bold_state == false) {
            textatea.css("font-weight", "bold")
            bold_state = true;
        } else {
            textatea.css("font-weight", "normal")
            bold_state = false;
        }
    })
    // вибір жирності тексту

    // вибір стиля тексту
    $(".italic").click(function () {
        if (italic_state == false) {
            textatea.css("font-style", "italic")
            italic_state = true;
        } else {
            textatea.css("font-style", "normal")
            italic_state = false;
        }
    })
    // вибір стиля тексту

    // переключення декорації тексту на підкресленний текст
    $(".underline").click(function () {
        if (underline_state == false) {
            textatea.css("text-decoration", "underline")
            underline_state = true;
        } else {
            textatea.css("text-decoration", "none")
            underline_state = false;
        }
    })
    // переключення декорації тексту на підкреслений текст

    // переключення декорації тексту на перекреслений текст
    $(".strikethrough").click(function () {
        if (strikethrough_state == false) {
            textatea.css("text-decoration", "line-through")
            strikethrough_state = true;
        } else {
            textatea.css("text-decoration", "none")
            strikethrough_state = false;
        }
    })
    // переключення декорації тексту на перекреслений текст

    // зміна розміщення тексту
    $(".align_left").click(function () {
        textatea.css("text-align", "left")
    })
    $(".align_center").click(function () {
        textatea.css("text-align", "center")
    })
    $(".align_right").click(function () {
        textatea.css("text-align", "right")
    })
    // зміна розміщення тексту

    // вибір шрифта тексту
    $(".font_family").click(function () {
        let font_family_state = $(".font_family")[0].value;
        textatea.css("font-family", `${font_family_state}`)
    })
    // вибір шрифта тексту

    // вибір розміра тексту
    $(".font_size").click(function () {
        let font_size_state = $(".font_size")[0].value;
        console.log(font_size_state);
        textatea.css("font-size", `${font_size_state}`)
    })
    // вибір розміра тексту

    // анімація модалки для вибору кольору тексту
    $(".text_color").click(function () {
        let modal_color_picker_state = $(".modal_color_picker");
        modal_color_picker_state.css("display", "block")
        $(".modal_1").animate({
            opacity: 1,
            marginTop: "+=60px",
        }, 200)
    })
    $(".close").click(function () {
        let modal_color_picker_state = $(".modal_color_picker");
        $(".modal_1").animate({
            opacity: 0,
            marginTop: "-=60px",
        }, 200, function () {
            modal_color_picker_state.css("display", "none")
            $(".modal_1").css("margin-top", "0px")
        });
    })
    // анімація модалки для вибору кольору тексту

    // функція присвоєння кольору тексту
    $(".color_block").click(function () {
        let color_block_state = $(this).css('background-color');
        textatea.css("color", `${color_block_state}`)
    })
    // функція присвоєння кольору тексту

    // анімація модалки для вибору кольору та картинки фону
    $(".bacground_image").click(function () {
        let modal_bacground_picker = $(".modal_bacground_picker");
        modal_bacground_picker.css("display", "block")
        $(".modal_2").animate({
            opacity: 1,
            marginTop: "+=60px",
        }, 200)
    })
    $(".close").click(function () {
        let modal_bacground_picker = $(".modal_bacground_picker");
        $(".modal_2").animate({
            opacity: 0,
            marginTop: "-=60px",
        }, 200, function () {
            modal_bacground_picker.css("display", "none")
            $(".modal_2").css("margin-top", "0px")
        });
    })
    // анімація модалки для вибору кольору та картинки фону

    // функція присвоєння кольору фону
    $(".color_block_bacground").click(function () {
        textatea.css("background-image", ``);
        let bacground_color_block_state = $(this).css('background-color');
        textatea.css("background-color", `${bacground_color_block_state}`)
    })
    // функція присвоєння кольору фону

    // функція присвоєння id зі стилями для кнопки color, images, files
    $(".section").click(function () {
        if (this.id == "") {
            for (let i = 0; i < $(".section").length; i++) {
                $(".section")[i].id = "";
            }
            this.id = "active_nav";
        }
    })
    // функція присвоєння id зі стилями для кнопки color, images, files

    // перемикання по меню color, images, files
    $(".colors").click(function () {
        $(".bacground_colors_wrapper").css("display", "flex");
        $(".bacground_image_wrapper").css("display", "none");
        $(".bacground_file_wrapper").css("display", "none");
    })

    $(".images").click(function () {
        $(".bacground_colors_wrapper").css("display", "none");
        $(".bacground_image_wrapper").css("display", "flex");
        $(".bacground_file_wrapper").css("display", "none");
    })
    $(".files").click(function () {
        $(".bacground_colors_wrapper").css("display", "none");
        $(".bacground_image_wrapper").css("display", "none");
        $(".bacground_file_wrapper").css("display", "flex");
    })
    // перемикання по меню color, images, files

    // функція присвоєння картинки фону
    $(".image_block_bacground").click(function () {
        let bacground_image_state = $(this).css('background-image');
        textatea.css("background-image", `${bacground_image_state}`);
    })
    // функція присвоєння картинки фону

    // функція присвоєння картинки фону через файл
    $('#change_file').change(function () {
        let sourse = window.URL.createObjectURL(this.files[0]);
        textatea.css("background-image", `url(${sourse})`);
    })
    // функція присвоєння картинки фону через файл

    // анімація модалки для вибору кольору тексту
    $(".login").click(function () {
        let modal_login_state = $(".modal_login");
        modal_login_state.css("display", "block")
        if ($(".login_form_wrapper").css("display") !== "flex") {
            $('.sign_out_form_wrapper').css("display", "flex")

            $(".modal_3").animate({
                opacity: 1,
                marginTop: "+=60px",
            }, 200)
        } else {
            $(".modal_3").animate({
                opacity: 1,
                marginTop: "+=60px",
            }, 200)
        }
    })
    $(".close").click(function () {
        let modal_login_state = $(".modal_login");
        $(".modal_3").animate({
            opacity: 0,
            marginTop: "-=60px",
        }, 200, function () {
            modal_login_state.css("display", "none")
            $(".modal_3").css("margin-top", "0px")
        });
    })
    // анімація модалки для вибору кольору тексту

    // перевірка правильності заповненості полів
    $("#sign_in").click(function () {
        let bool_login = true;
        let bool_password = true;
        let login_state = $('#login')[0];
        let password_state = $('#password')[0];

        if (login_state.value !== "") {
            bool_login = false;
        } else $("#login").css("border", "1px solid red")
        if (password_state.value !== "") {
            bool_password = false;
        } else $("#password").css("border", "1px solid red")

        if ((bool_login && bool_password) == true) {
            $('.not_correct_value').css("display", "none")
            $('.empty_value').css("display", "block")
        } else {
            if (login_state.value == "admin") {
                $("#login").css("border", "1px solid silver")
                if (password_state.value == "admin") {
                    $(".modal_3").animate({
                        opacity: 0,
                        marginTop: "-=60px",
                    }, 200, function () {
                        $('.modal_login').css("display", "none")
                        $(".modal_3").css("margin-top", "0px")

                        login_state.value = '';
                        password_state.value = '';

                        $("#password").css("border", "1px solid silver")
                        $('.not_correct_value').css("display", "none")
                        $('.empty_value').css("display", "none")
                        $('.login_form_wrapper').css("display", "none")
                        $('.sign_out_form_wrapper').css("display", "flex")

                        $('.code').removeClass("disabled");
                        $('.code').addClass("enabled");

                        $('.replacement').removeClass("fa-lock");
                        $('.replacement').addClass("fa-unlock");
                    });
                }
            } else {
                $("#login").css("border", "1px solid red")
                $("#password").css("border", "1px solid red")
                $('.not_correct_value').css("display", "block")
                $('.empty_value').css("display", "none")
            }
        }
    })
    // перевірка правильності заповненості полів

    // вихід з аканута
    $('.sign_out').click(function () {
        $(".modal_3").animate({
            opacity: 0,
            marginTop: "-=60px",
        }, 200, function () {
            $('.modal_login').css("display", "none")
            $(".modal_3").css("margin-top", "0px")
            $(".login_form_wrapper").css("display", "flex");
            $(".sign_out_form_wrapper").css("display", "none");

            $('.code').removeClass("enabled");
            $('.code').addClass("disabled");

            $('.replacement').addClass("fa-lock");
            $('.replacement').removeClass("fa-unlock");
        });
    })
    // вихід з аканута

    // відкриття редактора
    $('.code').click(function () {
        if ($('.home').css('display') !== 'none') {
            $('.home').css('display', 'none');
            $('.extended').css('display', 'flex');
        } else $('.home').css('display', 'flex');
    })
    // відкриття редактора

    // збереження тексту з редактора на головну сторінку
    $('.save').click(function () {
        $('.extended').css('display', 'none');
        $('.home').css('display', 'flex');
        $("#textarea").html('');
        $("#textarea").html($('#editor')[0].value);
    })
    // збереження тексту з редактора на головну сторінку

    // анімація модалки для створення таблиці
    $(".table").click(function () {
        let modal_create_table_state = $(".modal_create_table");
        modal_create_table_state.css("display", "block")
        $(".modal_4").animate({
            opacity: 1,
            marginTop: "+=60px",
        }, 200)
    })
    $(".close").click(function () {
        let modal_create_table_state = $(".modal_create_table");
        $(".modal_4").animate({
            opacity: 0,
            marginTop: "-=60px",
        }, 200, function () {
            modal_create_table_state.css("display", "none")
            $(".modal_4").css("margin-top", "0px")
        });
    })
    // анімація модалки для створення таблиці

    // функція створення таблиці
    $('#create_table').click(function () {
        let table_create_array = '';
        let count_tr_state = $('#count_tr')[0].value;
        let count_td_state = $('#count_td')[0].value;
        let width_td_state = $('#width_td')[0].value;
        let height_td_state = $('#height_td')[0].value;
        let width_border_table_state = $('#width_border_table')[0].value;
        let style_border_state = $('#style_border')[0].value;
        let color_border_state = $('#color_border')[0].value;

        let boolean_table = {
            count_tr_bool: false,
            count_td_bool: false,
            width_td_bool: false,
            height_td_bool: false,
            width_border_table_bool: false,
            style_border_bool: false,
            color_border_bool: false,
        }

        if (count_tr_state !== '') {
            boolean_table.count_tr_bool = true;
            $('#count_tr').css('border', '1px solid silver')
        } else $('#count_tr').css('border', '1px solid red')
        if (count_td_state !== '') {
            boolean_table.count_td_bool = true;
            $('#count_td').css('border', '1px solid silver')
        } else $('#count_td').css('border', '1px solid red')
        if (width_td_state !== '') {
            boolean_table.width_td_bool = true;
            $('#width_td').css('border', '1px solid silver')
        } else $('#width_td').css('border', '1px solid red')
        if (height_td_state !== '') {
            boolean_table.height_td_bool = true;
            $('#height_td').css('border', '1px solid silver')
        } else $('#height_td').css('border', '1px solid red')
        if (width_border_table_state !== '') {
            boolean_table.width_border_table_bool = true;
            $('#width_border_table').css('border', '1px solid silver')
        } else $('#width_border_table').css('border', '1px solid red')
        if (style_border_state !== 'Choose') {
            boolean_table.style_border_bool = true;
            $('#style_border').css('border', '1px solid silver')
        } else $('#style_border').css('border', '1px solid red')
        if (color_border_state !== 'Choose') {
            boolean_table.color_border_bool = true;
            $('#color_border').css('border', '1px solid silver')
        } else $('#color_border').css('border', '1px solid red')

        if ((boolean_table.count_tr_bool && boolean_table.count_td_bool && boolean_table.width_td_bool && boolean_table.height_td_bool && boolean_table.width_border_table_bool && boolean_table.style_border_bool && boolean_table.color_border_bool) == true) {
            $(".invalid_value").css("display", "none")
            $("#create_table").css("margin-top", "20px")

            for (i = 0; i < count_tr_state; i++) {
                table_create_array += "<tr>";
                for (j = 0; j < count_td_state; j++) {
                    table_create_array += `<td style="width: ${width_td_state}px; height: ${height_td_state}px; border: ${width_border_table_state}px ${style_border_state} ${color_border_state}">TD</td>`;
                }
                table_create_array += "</tr>";
            }

            $("#editor")[0].value += `<table>${table_create_array}</table>`;
        } else {
            $(".invalid_value").css("display", "block")
            $("#create_table").css("margin-top", "48px")
        }
    })
    // функція створення таблиці

    // функція очищення форми створення таблиці
    $('#reset_create_table').click(function () {
        $('#count_tr')[0].value = '';
        $('#count_td')[0].value = '';
        $('#width_td')[0].value = '';
        $('#height_td')[0].value = '';
        $('#width_border_table')[0].value = '';
        $('#style_border')[0].value = 'Choose';
        $('#color_border')[0].value = 'Choose';
    })
    // функція очищення форми створення таблиці

    // анімація модалки для створення списку OL
    $(".list_ol").click(function () {
        let modal_create_table_state = $(".modal_create_ol");
        modal_create_table_state.css("display", "block")
        $(".modal_5").animate({
            opacity: 1,
            marginTop: "+=60px",
        }, 200)
    })
    $(".close").click(function () {
        let modal_create_table_state = $(".modal_create_ol");
        $(".modal_5").animate({
            opacity: 0,
            marginTop: "-=60px",
        }, 200, function () {
            modal_create_table_state.css("display", "none")
            $(".modal_5").css("margin-top", "0px")
        });
    })
    // анімація модалки для створення списку OL

    // функція створення списку OL
    $('#create_ol').click(function () {
        let ol_create_array = '';
        let count_li_state = $('#count_li_ol')[0].value;
        let type_mark_state_ol = '';

        let boolean_ol = {
            count_li_ol_bool: false,
            type_mark_ol_bool: false,
        }

        if (count_li_state !== '') {
            boolean_ol.count_li_ol_bool = true;
            $('#count_li_ol').css('border', '1px solid silver')
        } else $('#count_li_ol').css('border', '1px solid red')
        if ($('#type_mark_ol')[0].value !== 'Choose') {
            boolean_ol.type_mark_ol_bool = true;
            $('#type_mark_ol').css('border', '1px solid silver')
        } else $('#type_mark_ol').css('border', '1px solid red')

        if ((boolean_ol.count_li_ol_bool && boolean_ol.type_mark_ol_bool) == true) {
            $(".invalid_value").css("display", "none")

            if ($('#type_mark_ol')[0].value == "1") {
                type_mark_state_ol = 'decimal';
            }
            if ($('#type_mark_ol')[0].value == "I") {
                type_mark_state_ol = 'upper-roman';
            }
            if ($('#type_mark_ol')[0].value == "i") {
                type_mark_state_ol = 'lower-roman';
            }
            if ($('#type_mark_ol')[0].value == "A") {
                type_mark_state_ol = 'upper-alpha';
            }
            if ($('#type_mark_ol')[0].value == "a") {
                type_mark_state_ol = 'lower-alpha';
            }
            console.log(type_mark_state_ol);
            for (i = 1; i <= count_li_state; i++) {
                ol_create_array += `<li>Item ${i}</li>`;
            }

            $("#editor")[0].value += `<ol style="list-style-type: ${type_mark_state_ol}">${ol_create_array}</ol>`;
        } else {
            $(".invalid_value").css("display", "block")
        }
    })
    // функція створення списку OL

    // функція очищення форми списку OL
    $('#reset_create_ol').click(function () {
        $('#count_li_ol')[0].value = '';
        $('#type_mark_ol')[0].value = 'Choose';
    })
    // функція очищення форми списку OL

    // анімація модалки для створення списку UL
    $(".list_ul").click(function () {
        let modal_create_table_state = $(".modal_create_ul");
        modal_create_table_state.css("display", "block")
        $(".modal_6").animate({
            opacity: 1,
            marginTop: "+=60px",
        }, 200)
    })
    $(".close").click(function () {
        let modal_create_table_state = $(".modal_create_ul");
        $(".modal_6").animate({
            opacity: 0,
            marginTop: "-=60px",
        }, 200, function () {
            modal_create_table_state.css("display", "none")
            $(".modal_6").css("margin-top", "0px")
        });
    })
    // анімація модалки для створення списку UL

    // функція створення списку UL
    $('#create_ul').click(function () {
        let ul_create_array = '';
        let count_li_state = $('#count_li_ul')[0].value;
        let type_mark_state_ul = '';



        let boolean_ul = {
            count_li_ul_bool: false,
            type_mark_ul_bool: false,
        }

        if (count_li_state !== '') {
            boolean_ul.count_li_ul_bool = true;
            $('#count_li_ul').css('border', '1px solid silver')
        } else $('#count_li_ul').css('border', '1px solid red')
        if ($('#type_mark_ul')[0].value !== 'Choose') {
            boolean_ul.type_mark_ul_bool = true;
            $('#type_mark_ul').css('border', '1px solid silver')
        } else $('#type_mark_ul').css('border', '1px solid red')

        if ((boolean_ul.count_li_ul_bool && boolean_ul.type_mark_ul_bool) == true) {
            $(".invalid_value").css("display", "none")

            if ($('#type_mark_ul')[0].value == "circle") {
                type_mark_state_ul = 'circle';
            }
            if ($('#type_mark_ul')[0].value == "disc") {
                type_mark_state_ul = 'disc';
            }
            if ($('#type_mark_ul')[0].value == "square") {
                type_mark_state_ul = 'square';
            }
            console.log(type_mark_state_ul);
            for (i = 1; i <= count_li_state; i++) {
                ul_create_array += `<li>Item ${i}</li>`;
            }

            $("#editor")[0].value += `<ul style="list-style-type: ${type_mark_state_ul}">${ul_create_array}</ul>`;
        } else {
            $(".invalid_value").css("display", "block")
        }
    })
    // функція створення списку UL

    // функція очищення форми списку OL
    $('#reset_create_ul').click(function () {
        $('#count_li_ul')[0].value = '';
        $('#type_mark_ul')[0].value = 'Choose';
    })
    // функція очищення форми списку OL
})