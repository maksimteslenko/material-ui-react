import { Box, Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import TextField from '@mui/material/TextField';

 function App() {
	const [ratingValue, setRatingValue] = useState<number | null>(null);
	const [comment, setComment] = useState("");

	const isDisabled = ratingValue === null || comment === "";

	return (
		<Box sx={{
				width: "100vw",
				display:"flex",
				justifyContent:"center",
			}} 
		>
			<Box sx={{width: "300px", display:"flex", flexDirection:"column",}}>
				<Typography>How would you rate this experience?</Typography>
				<Rating value={ratingValue} onChange={(_, value) => {setRatingValue(value)}} />
				<Typography>Tell us how it went.</Typography>
				<TextField multiline maxRows={4} value={comment} onChange={(e) => {setComment(e.target.value)}} />
				<Button disabled={isDisabled} sx={{mt: 1}} variant="contained">Submit</Button>
			</Box>
		</Box>
	)
}

export default App