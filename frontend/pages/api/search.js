export default function handler(req, res) {
    if (req.method==="POST"){
        res.status(200).json({
            "schools": [{
                "_id": "XXX",
                "name": "Indiana University Bloomington",
                "location": "Bloomington, IN"
            }]
        })
        
    }

    else {res.status(404).res.send("not found")}
  }
