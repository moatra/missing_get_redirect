import {goto} from "$app/navigation";

export function form_enhance(form) {
    const on_submit = async (e) => {
        e.preventDefault();
        let body = new FormData(form);
        let res = await fetch("/", {
            method: "post",
            headers: {
                accept: "application/json",
            },
            body
        });
        let json = await res.json();
        goto(json.goto);
    }
    form.addEventListener("submit", on_submit);
    return {
        destroy: () => {
            form.removeEventListener("submit", on_submit);
        }
    }
}