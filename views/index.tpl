<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>{{pageTitle}}</title>
    <link href="/static/libs/bootstrap-3.3.5-dist/css/bootstrap.min.css" rel="stylesheet" />
    <link href="/static/libs/font-awesome-4.6.1/css/font-awesome.min.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="/static/main.css">
    <link rel="stylesheet" type="text/css" href="/static/header.css">
    <link rel="stylesheet" type="text/css" href="/static/article-{{articleCSS}}.css">
     <link rel="stylesheet" type="text/css" href="/static/footer.css">
</head>

<body>
    {{{header}}}
    {{{article}}}
    {{{footer}}}

    <script src=" /static/libs/jQuery/jquery-2.1.4.js ">

    </script>
    <script src="/static/libs/bootstrap-3.3.5-dist/js/bootstrap.min.js ">

    </script>
    <script src="/static/libs/jquery-mousewheel/jquery-mousewheel.js ">

    </script>
    <script src="/static/main.js ">

    </script>
    <script src="/static/{{pageTitle}}.js ">
    <!--.js的文件名及为页面title名-->
    </script>
</body>

</html>