<script>
        function hideLabel(input) {
            input.previousElementSibling.style.display = 'none';
        }
        function showLabel(input) {
            if (input.value === '') {
            input.previousElementSibling.style.display = 'block';
        }
    }
</script>