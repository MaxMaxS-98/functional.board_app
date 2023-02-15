const updateDealer = async (hand, current_status, is_active) => {
    try {
        const response = await fetch(`/api/Dealer/1`, {
        method: 'PUT',
        body: JSON.stringify({ hand, current_status, is_active}),
        headers: { 'Content-Type': 'application/json' }
        })
        if (response.ok) {
            console.log(`Dealer status updated!`)
        }
        }
        catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
    
    module.exports = updateDealer