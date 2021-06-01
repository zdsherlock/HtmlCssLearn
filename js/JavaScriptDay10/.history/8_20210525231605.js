function say() {
    i++
    alert('你是复读机么');
    if (i ===3){
        alert('你有完没完');
        return;
    }
    say();
}

say();