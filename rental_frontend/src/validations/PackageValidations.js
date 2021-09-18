import joi from "joi"

const packageValidations = (package_for_validation) => {
    const schema = joi.object({
        name: joi.string().min(3).max(255).required().messages({
            "string.empty": `Package Name is required.`,
            "any.required": `Package Name is required.`,
            "string.base": `Package Name should be a type of 'text'.`,
            "string.min": `Package Name should have a minimum length of {#limit}.`,
            "string.max": `Package Name should have a maximum length of {#limit}.`,
        }),
        id: joi.string().min(3).max(255).required().messages({
            "string.empty": `Package Id is required.`,
            "any.required": `Package Id is required.`,
            "string.base": `Package Id should be a type of 'text'.`,
            "string.min": `Package Id should have a minimum length of {#limit}.`,
            "string.max": `Package Id should have a maximum length of {#limit}.`,
        }),
        price: joi.number().positive().required().messages({
            "number.positive": `Price for the package can not be negative value.`,
            "any.required": `Package price is required.`,
            "number.base": `Please enter package price.`,
        }),
        discount: joi.number().positive().max(100).required().messages({
            "number.positive": `Discount for the package can not be negative value.`,
            "number.max": `Discount cannot be more than 100.`,
            "number.base": `Please enter package discount.`,
        }),
        description: joi.string().min(3).max(255).required().messages({
            "string.empty": `Package description is required.`,
            "any.required": `Package description is required.`,
            "string.base": `Package description should be a type of 'text'.`,
            "string.min": `Package description should have a minimum length of {#limit}.`,
            "string.max": `Package description should have a maximum length of {#limit}.`,
        }),
    });

    const result = schema.validate(package_for_validation);

    if (result.error) {
        return {
            status: false,
            error: result.error.message,
        }
    } else {
        return {
            status: true
        }
    }
};

export default packageValidations;