

const { extend } = require('lodash').extend;

module.exports = {
	BadRequest: {
		error: 'Bad Request',
		status: 400,
	},

	Unauthorized: {
		error: 'Unauthorised',
		status: 401,
	},

	Forbidden: {
		error: 'Forbidden',
		status: 403,
	},

	NotFound: {
		error: 'Not Found',
		status: 404,
	},

	UnprocessableEntity: {
		status: 422,
		error: 'Unprocessable Entity',
	},

	InternalServerError: {
		error: 'Internal Server Error',
		status: 500,
	},

	Success: {
		error: '',
		status: 200,
	},

	onlyAdmin: extend({}, this.Forbidden, {
		message: 'Only admins are allowed to do this!',
	}),

	NoPermesssion: extend({}, {
		error: 'Forbidden',
		status: 403,
		message: 'You do not have permission to consume this resource!',
	}),

	invalidId: extend({}, this.BadRequest, {
		message: 'Invalid Id parameter',
	}),

	invalidSearchTerm: extend({}, this.BadRequest, {
		message: 'Invalid search term',
	}),

	missingAttr(attrs) {
		return extend({}, this.BadRequest, {
			message: `Attribute(s) (${attrs.join(',')}) seem(s) to be missing`,
		});
	},

	unwantedAttr(attrs) {
		return extend({}, this.BadRequest, {
			message: `Attribute(s) (${attrs.join(',')}) can't be updated`,
		});
	},

	uniqueAttr(attrs) {
		return extend({}, this.BadRequest, {
			message: `Attribute(s) [${attrs.join(',')}] must be unique`,
		});
	},

	custom(msg) {
		return extend({}, this.BadRequest, {
			message: msg,
		});
	},

	// REST

	addFailure() {
		return extend({}, this.BadRequest, {
			message: 'Item WAS NOT added',
		});
	},

	deleteFailure() {
		return extend({}, this.BadRequest, {
			message: 'Item WAS NOT deleted',
		});
	},

	updateFailure() {
		return extend({}, this.BadRequest, {
			message: 'Item WAS NOT updated',
		});
	},

	addSuccess() {
		return extend({}, this.Success, {
			message: 'Item added successfully',
		});
	},

	deleteSuccess() {
		return extend({}, this.Success, {
			message: 'Item deleted successfully',
		});
	},

	updateSuccess() {
		return extend({}, this.Success, {
			message: 'Item updated successfully',
		});
	},

	empty: [],
};
