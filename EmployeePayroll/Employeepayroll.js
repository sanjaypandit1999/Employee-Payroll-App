class EmployeePayRollData{
    get id() { return this._id; }
    set id (id){
        return this._id = id;
    }
    get name (){ return this._name; }
    set name (name) {
        let nameRegexPattern = RegExp('^[A-Z]{1}[A-Z a-z//s]{2,}$');
        if(nameRegexPattern.test(name)){
            return this._name = name;
        }else{
            throw 'Name is incorrect';
        }
    }
    get profilePic() { return this._profilePic; }
    set profilePic(profilePic){
        return this._profilePic = profilePic;
    }
    get gender() {return this._gender;}
    set gender(gender){
        return this._gender = gender;
    }
    get salary() {return this._salary; }
    set salary(salary) {
        return this._salary = salary;
    }
    get note() {return this._note;}
    set note(note){
        return this._note = note;
    }
    get startDate() {return this._startDate;}
    set startDate(startDate){
        return this._startDate = startDate;
    }
    toString(){
        const option = {year: 'numeric', monh: 'long', day: 'numeric' };
        const empDate = !this.startDate ? "undefiend" : this.startDate.toLocalDateString("en-US", option);
        return "id=" +this.id + ", name= " +this.name + ", profilePic=" +this.profilePic+ ", department="
        +this.profilePic+", salary= " +this.salary +", startDate=" +this.startDate+ ", note=" +this.note; 
    }
}