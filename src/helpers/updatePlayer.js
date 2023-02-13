
const updatePlayer = async (id, hand, credit, current_status, is_active) => {
try {
    const response = await fetch(`/api/player/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ hand, credit, current_status, is_active}),
    headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
        console.log(`player status updated!`)
    }
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

module.exports = updatePlayer
