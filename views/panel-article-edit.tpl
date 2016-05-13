<article class="article container">
    <div class="row">

        <!-- write Container -->
        <div class="
                col-lg-10 col-lg-offset-1
                col-md-10 col-md-offset-1">
            <div id="editor">
                <textarea v-model="input" debounce="300"></textarea>
                <div v-html="input | marked"></div>
            </div>
        </div>
    </div>

</article>