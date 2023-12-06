function cleanSet(set, startString) {
    let result = '';
    set.forEach(value => {
        if (startString && value.startsWith(startString)) {
            const remaining = value.substring(startString.length);
            result += remaining + '-';
        }
    });
    return result.slice(0, -1);
}

export default cleanSet;
