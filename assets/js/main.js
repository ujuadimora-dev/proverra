/* =========================================
   PROVERRA ACADEMY
   MAIN JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       MOBILE MENU
    ====================================== */

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function (event) {

            event.stopPropagation();

            const isOpen =
                mainNav.classList.toggle("active");

            menuToggle.classList.toggle(
                "active",
                isOpen
            );

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });

    }


    /* =====================================
       SCHOOLS DROPDOWN
    ====================================== */

    const dropdowns =
        document.querySelectorAll(".nav-dropdown");


    dropdowns.forEach(function (dropdown) {

        const dropdownToggle =
            dropdown.querySelector(
                ".nav-dropdown-toggle"
            );


        if (!dropdownToggle) return;


        dropdownToggle.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();


                const isOpen =
                    dropdown.classList.contains("open");


                /* Close all dropdowns */

                dropdowns.forEach(function (item) {

                    item.classList.remove("open");

                    const button =
                        item.querySelector(
                            ".nav-dropdown-toggle"
                        );

                    if (button) {

                        button.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                });


                /* Open selected dropdown */

                if (!isOpen) {

                    dropdown.classList.add("open");

                    dropdownToggle.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                }

            }
        );

    });


    /* =====================================
       CLOSE MENU WHEN NORMAL LINK CLICKED
    ====================================== */

    const navLinks =
        mainNav
            ? mainNav.querySelectorAll(
                "a"
            )
            : [];


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                /*
                On mobile close the menu
                after choosing a destination.
                */

                if (window.innerWidth <= 1180) {

                    mainNav.classList.remove(
                        "active"
                    );

                    if (menuToggle) {

                        menuToggle.classList.remove(
                            "active"
                        );

                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                }

            }
        );

    });


    /* =====================================
       CLICK OUTSIDE
    ====================================== */

    document.addEventListener(
        "click",
        function (event) {

            const clickedInsideNav =
                mainNav &&
                mainNav.contains(event.target);

            const clickedToggle =
                menuToggle &&
                menuToggle.contains(event.target);


            if (
                !clickedInsideNav &&
                !clickedToggle
            ) {

                if (mainNav) {

                    mainNav.classList.remove(
                        "active"
                    );

                }


                if (menuToggle) {

                    menuToggle.classList.remove(
                        "active"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }


                dropdowns.forEach(
                    function (dropdown) {

                        dropdown.classList.remove(
                            "open"
                        );

                        const button =
                            dropdown.querySelector(
                                ".nav-dropdown-toggle"
                            );

                        if (button) {

                            button.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        }

                    }
                );

            }

        }
    );


    /* =====================================
       RESET WHEN SCREEN BECOMES DESKTOP
    ====================================== */

    window.addEventListener(
        "resize",
        function () {

            if (
                window.innerWidth > 1180
            ) {

                if (mainNav) {

                    mainNav.classList.remove(
                        "active"
                    );

                }


                if (menuToggle) {

                    menuToggle.classList.remove(
                        "active"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }

        }
    );

});