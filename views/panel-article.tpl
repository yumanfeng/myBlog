<article class="article container">
        <div class="row">

            <!-- write Container -->
            <div class="
                col-lg-10 col-lg-offset-1
                col-md-10 col-md-offset-1">
                <a href="/panel/edit" class="add" title="新增博文">
                    <i class="fa fa-plus-square-o fa-3" aria-hidden="true"></i>
                    <!--TODO: Button上使用ToolTip-->
                    </a>
                <hr>
                <ul>
                    {{#each essaies}}
                    <li class="essayList">
                        <div class="essayTitle">
                            <a href="/panel/edit?id={{id}}">{{title}}</a>
                        </div>
                        <div class="essayEdit">
                            <span>{{createTime}}</span>
                            <a href="/panel/edit?id={{id}}">修改</a>
                            <a href="/panel/edit?id={{id}}&del=true">删除</a>
                        </div>
                    </li>
                    {{/each}}
                </ul>
            </div>

    </article>