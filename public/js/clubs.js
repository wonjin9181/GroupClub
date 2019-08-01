let clubData = JSON.parse(localStorage.getItem("clubinfo"));
console.log(clubData);

$('#clubName').text(clubData.clubName);

let clubInfo = `
<div style="list-style-type:none;" id="clubDiv" data-id=${clubData.id}>
<div id="clubName"><h1>${clubData.clubName}</h1></div>
<br><br>
<div id="clubLeader">Leader:  ${clubData.clubMaker}</div>
<br>
<div id="clubLocation">Location:   ${clubData.clubLocation}</div>
<br>
<div id="clubDescription">Club Description:  ${clubData.clubDescription}</div>
<br>
</div>
`

$('#clubInfo').prepend(clubInfo);
//add time updated w/moment()