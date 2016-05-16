<article class="article container">
    <div class="row">

        <!-- write Container -->
        <div class="
                col-lg-10 col-lg-offset-1
                col-md-10 col-md-offset-1">
            <input type="text" class='title' value={{title}} onfocus="javascript:if(this.value=='标题')this.value='';">
            <div id="editor">
                <textarea v-model="input" debounce="300" onfocus="javascript:if(this.value=='请在这里输入正文')this.value='';">{{body}}</textarea>
                <div class="md" v-html="input | marked"></div>
            </div>
            <input type="radio" {{{isCheckedWrite}}} name="Type" value="write" />文章
            <input type="radio" {{{isCheckedNote}}} name="Type" value="note" />笔记
            <button onClick="onSaveWrite({{id}})" class="btn btn-default btn-lg btn-block">保存</button>
        </div>
    </div>

</article>