<!DOCTYPE html>
<html lang="en">

<head>
    <title>Jeremy Williams - Web Development</title>

    <meta name="description" content="An innovative, customer-focused, analytical front-end developer, with a background in art &amp; design, offering over eight years of experience." />
    <meta name="author" content="Jeremy Williams" />
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="google-site-verification" content="lnKQvjOEA9lr0x4PZXquKda1sBFgbOVSBM53GQFycVk" />

    <link href="styles/css/app.css" rel="stylesheet" />

    <!-- <link rel="icon" href="favicon.ico" type="image/x-icon" />
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" /> -->
    <link rel="icon" type="image/png" href="favicon-16.png" sizes="16x16">
    <link rel="icon" type="image/png" href="favicon-32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="favicon-96.png" sizes="96x96">
    <link rel="apple-touch-icon" href="favicon-120.png"> <!-- 120px -->
    <link rel="apple-touch-icon" sizes="180x180" href="favicon-180.png">
    <link rel="apple-touch-icon" sizes="152x152" href="favicon-152.png">
    <link rel="apple-touch-icon" sizes="167x167" href="favicon-167.png">

    <link rel="canonical" href="//www.jeremyclarkwilliams.com" />
</head>

<body>

    <?php include 'partials/header.php'; ?>

    <?php
        $links_top = true;
        include 'partials/links.php';
    ?>

    <?php include 'partials/about.php'; ?>

    <?php include 'partials/education.php'; ?>

    <?php include 'partials/experience.php'; ?>

    <?php include 'partials/skills.php'; ?>

    <?php
        $links_top = false;
        include 'partials/links.php';
    ?>

    <?php include 'partials/footer.php'; ?>

    <!-- Web Font Loader -->
    <script>
        WebFontConfig = {
            google: {
                families: ['Raleway:300,500,700', 'Galada']
            },
            timeout: 3000
        };

        (function(d) {
            var wf = d.createElement('script'), s = d.scripts[0];
            wf.src = '//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
            wf.async = true;
            s.parentNode.insertBefore(wf, s);
        })(document);
    </script>

    <!-- Google Analytics -->
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-9695673-1', 'auto');
        ga('send', 'pageview');
    </script>

    <!-- Font Awesome -->
    <script src="//use.fontawesome.com/bd0a590f40.js" async></script>

    <!-- Custom JavaScript -->
    <script src="scripts/app.js" async></script>

</body>

</html>
