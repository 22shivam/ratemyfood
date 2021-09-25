import BaseUrl from './base-url';

function pushReview(info, n) {
    const url = `${BaseUrl}/Review/review`;
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: info,
      };
    return new Promise((resolve, reject) => {
        fetch(url, options).then(() => resolve()).catch((err) => {
            if(n > 0) {
                pushReview(info, n - 1).then(() => resolve()).catch((err) => {
                    reject();
                });
            } else {
                reject();
            }
        });
    });
}

function pushFeedback(info, n) {
    const url = `${BaseUrl}/Feedback/feedback`;
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: info,
        }).then(() => resolve()).catch(err => {
            if(n > 0) {
                pushFeedback(info, n).then(() => resolve()).catch(err => {
                    reject();
                });
            } else {
                reject();
            }
        });
    });
}

export {
    pushReview,
    pushFeedback
}