import BaseUrl from './base-url';

function queryAPI(url, n) {
    return new Promise((resolve, reject) => {
        if(n > 0) {
            fetch(url).then((results) => {
                resolve(results);
            }).catch((error) => {
                n--;
                console.log('error', error);
                console.log(n);
                queryAPI(url, n - 1).then(resolve(results)).catch((error) => {
                    reject(error);
                });
            });
        } else {
            reject();
        }
    });
}

const endpoints = {
    search: `${BaseUrl}/School/school/search`,
    searchEateries: `${BaseUrl}/School/school`,
    eateries: `${BaseUrl}/School/school`,
    foods: `${BaseUrl}/Eatery/eatery`,
    reviews: `${BaseUrl}/Food/food`
}

async function querySearch(query) {
    const queryRes = await queryAPI(`${endpoints.search}?query=${query}`, 5);
    const queryData = await queryRes.json();
    
    return queryData.results;
}

async function eaterySearch(school, query) {
    const queryRes = await queryAPI(`${endpoints.searchEateries}/${school}/eateries/search?query=${query}`, 5);
    const queryData = await queryRes.json();
    
    return queryData.results;
}

async function allEateries(school) {
    const queryRes = await queryAPI(`${endpoints.eateries}/${school}/eateries`, 5);
    const queryData = await queryRes.json();

    return queryData;
}

async function queryFood(eatery) {
    const queryRes = await queryAPI(`${endpoints.foods}/${eatery}/foods`, 5);
    const queryData = await queryRes.json();

    return queryData;
}

async function searchFood(eatery, query) {
    const queryRes = await queryAPI(`${endpoints.foods}/${eatery}/foods/search?query=${query}`, 5);
    const queryData = await queryRes.json();
    
    return queryData.results;
}


async function queryReviews(food) {
    const queryRes = await queryAPI(`${endpoints.reviews}/${food}/reviews`, 5);
    const queryData = await queryRes.json();
    
    return queryData;
}

async function getFood(food) {
    const queryRes = await queryAPI(`${endpoints.reviews}/${food}`, 5);
    const queryData = await queryRes.json();
    
    return queryData;
}

export {
    querySearch,
    allEateries,
    eaterySearch,
    queryFood,
    searchFood,
    queryReviews,
    queryAPI,
    getFood
};