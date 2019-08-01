let clubData = JSON.parse(localStorage.getItem("clubinfo"));
console.log(clubData);

$('#clubName').text(clubData.clubName);

let clubInfo = `
<ul style="list-style-type:none;">
<li id="clubName">Club Name: ${clubData.clubName}</li>
<li id="clubLeader">Leader: ${clubData.clubMaker}</li>
<li id="clubLocation">Location:  ${clubData.clubLocation}</li>
<li id="clubDescription">Club Description:  ${clubData.clubDescription}</li>
</ul>
`

$('#clubInfo').prepend(clubInfo);
//add time updated w/moment()