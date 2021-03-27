class ApiData {

    // Calling REST call for get the data from APIs
    async data() {


        // get the data from provide url/file
        const apiResponse = await fetch('product.json');
        return apiResponse

    }

}