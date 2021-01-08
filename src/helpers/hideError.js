export const hideError = ( setError ) => {
    setTimeout(() => {
        setError( false );
    }, 3000);
}