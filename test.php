<?php
$number = [2, 3, 5, 1, 3, 5, 2, 4, 5, 6];

$sum = 0;
foreach ($number as $s) {
    if ($s % 2 == 0) {

    }
}
echo $sum;

$new_array = [];
foreach ($number as $n) {
    if (!in_array($n, $new_array)) {
        $new_array[] = $n;
    }
}

print_r($new_array);

$string = "sab86d5890373";
$break_sting = str_split($string);
$sum = 0;
foreach ($break_sting as $s) {
    $sum += (int) $s;
}
echo $sum;

$new_array = "";

print_r($break_sting);