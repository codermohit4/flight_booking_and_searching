const { where } = require("sequelize");

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try{

            const result = await this.model.create(data);
            return result;
        }
        catch(error){   
            console.log("something went wrong ");
            throw error;
        }
            
    }
    async destroy(modelId) {
        try{     

            const result = await this.model.destroy({
                where: {
                    id: modelId
                }
            });
            return result;
        }
        catch(error){   
            console.log("something went wrong ");
            throw error;
        }
    }

    async get(modelId) {
        try{
            const result = await this.model.findByPk(modelId);
            return result;
        }
        catch(error){   
            console.log("something went wrong ");
            throw error;
        }
    }

    async getAll() {
        try{

            const result = await this.model.findAll();
            return result;
        }
        catch(error){   
            console.log("something went wrong ");
            throw error;
        }
    }

    async update(modelid, data) { 
        try{

            const result = await this.model.update(data, {
                where: {
                    id: modelid
                }
            });
            return result;
        }
        catch(error){   
            console.log("something went wrong ");
            throw error;
        }
    }



}

module.exports = CrudRepository;

// now we can use in airport repository