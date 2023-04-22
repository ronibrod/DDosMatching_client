import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

<Stack spacing={3} sx={{ width: 500 }}>
    <Autocomplete
        multiple
        id="tags-filled"
        options={top100Films.map((option) => option.title)}
        freeSolo
        renderTags={(value, getTagProps) =>
            value.map((option, index) => (
                <Chip variant="outlined" label={option} {...getTagProps({ index })} />
            ))
        }
        renderInput={(params) => (
            <TextField
                {...params}
                variant="filled"
                placeholder="תכונות"
            />
        )}
    />
</Stack>
