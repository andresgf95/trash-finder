function aDataURL(files, handler) {
    const reader = new FileReader();
    reader.addEventListener("load", ()=>handler(reader.result), false);
    reader.readAsDataURL(files);
}

export { aDataURL }