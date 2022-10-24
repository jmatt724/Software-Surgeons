import React from 'react'
import { Flex } from '@chakra-ui/react';

function AdVideo() {
  return (
    <Flex width={1400} mt={15} mb={30}>
        <iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/2619912/sp/261991200/embedIframeJs/uiconf_id/45753661/partner_id/2619912?iframeembed=true&playerId=kaltura_player&entry_id=1_pmk1grl4&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_r5gg4w11" width="100%" height="800px" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="AccountAidAd"></iframe>
    </Flex>
  )
}

export default AdVideo