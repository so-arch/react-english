function Hello() {
    let myName = 'Prashant';
    let number = 456;
    let fullName = () => {
        return 'Sovan Sen'
    }
    return <h3>
        masterNo{number}. I am your master {fullName()}
    </h3>
}
export default Hello;