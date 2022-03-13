<script>
    import {form_enhance} from "./_enhance.js";
    import {getStores} from "$app/stores";
    let page = getStores().page;
</script>
<h1>Welcome to SvelteKit</h1>
<p>
    "Submitted" param present: {$page.url.searchParams.has("submitted")}
</p>
<a href="/">Remove submitted param</a>

<h3>Submit Then Redirect</h3>
<form action="/" method="post" use:form_enhance>
    <button type="submit">
        Submit me
    </button>
</form>
