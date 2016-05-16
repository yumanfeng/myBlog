
<article class="article container">
    <div class="row">
        <!--article content container-->
        <div class="content col-lg-8 col-lg-offset-1
                        col-md-8 col-md-offset-1
                        col-sm-12
                        col-xs-12
                        ">
            {{#each essaies}}
            <div class="one-write">
                <a href="/write/{{id}}">
                    <h2 class="write-title">
                         {{title}}
                        </h2>
                    <div class="write-content">
                        <script>
                            document.write(marked('{{{body}}}'))
                        </script>
                    </div>
                </a>
                <p class="write-meta">
                    Posted by {{blogOwner}} on {{createTime}}
                </p>
            </div>
            <hr>
            {{/each}}
            
            
            
            
    

        </div>
        <!--article side container-->
        <div class="side col-lg-3 col-lg-offset-0
                        col-md-3 col-md-offset-0
                        col-sm-12
                        col-xs-12
                        ">
            <section>
                <hr class="hidden-sm hidden-xs">
                <h4>
                    <a href="">博文</a>
                    <button>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </button>
                </h4>

                <ul class="">
                    <li><a href="">博文标题</a></li>
                    <li><a href="">博文标题</a></li>
                    <li><a href="">博文标题</a></li>
                    <li><a href="">博文标题</a></li>
                    <li>...</li>
                </ul>
            </section>
            <section>
                <hr class="hidden-sm hidden-xs">
                <h4>
                    <a href="">笔记</a>
                    <button>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </button>
                    </h4>
                <ul class="">
                    <li><a href="">笔记标题</a></li>
                    <li><a href="">笔记标题</a></li>    
                    <li><a href="">笔记标题</a></li>
                    <li><a href="">笔记标题</a></li>
                    <li>...</li>
                </ul>
            </section>
        </div>

    </div>

</article>