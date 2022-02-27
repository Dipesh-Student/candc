<?php
if (isset($_POST['message'])) {
    echo "message";
}elseif(isset($_POST['job'])){
    echo $_POST['job-position-value'];
}
