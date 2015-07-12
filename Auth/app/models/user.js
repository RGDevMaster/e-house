var User = function (data) {
	this.data = data; 
}

User.prototype.data = {}

User.prototyte.changeName = function (name) {
	this.data.name = name; 
}

User.findById = function (id, callback) {

}

module.exports = User; 
