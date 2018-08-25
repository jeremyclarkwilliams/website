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

    <link rel="canonical" href="//jeremyclarkwilliams.com" />
</head>

<body>

    <?php include 'partials/header.php'; ?>

    <?php include 'partials/links.php'; ?>

    <?php include 'partials/about.php'; ?>
    <?php include 'partials/education.php'; ?>
    <?php include 'partials/experience.php'; ?>
    <?php include 'partials/skills.php'; ?>

    <?php include 'partials/links.php'; ?>

    <?php include 'partials/footer.php'; ?>

    <button id="back-to-top" class="btn-top"><?php echo file_get_contents( 'images/icon-arrow-up.svg' ); ?></button>

    <!-- Font Awesome -->
    <!-- <script src="//use.fontawesome.com/bd0a590f40.js" async></script> -->

    <!-- Custom JavaScript -->
    <script src="scripts/app.js" async></script>

</body>

</html>
