class ApiData {

    // Calling REST call for get the data from APIs
    async data() {


        const apiResponse = await fetch('product.json');
        return apiResponse

    }

}