import React from "react";
import users from "../../data/users";
import {
    ListCard,
    ListCardHeader,
    ListCardIdentity,
    ListCardSummary,
    ListCardActions,
    ListCardDetail,
    SummaryText,
    VerticalMenu,
    Identity,
    P
} from "cyverse-ui";
import { pad, marg } from "cyverse-ui/styles";
import { Avatar, MenuItem } from "material-ui";

const user = users[0];

const ListCardDetailEx = props => (
    <ListCard>
        <ListCardHeader>
            <ListCardIdentity>
                <Identity
                    primaryText={user.name}
                    secondaryText={user.tagline}
                    image={
                        <Avatar backgroundColor="tomato">
                            {user.name[0]}
                        </Avatar>
                    }
                />
            </ListCardIdentity>
            <ListCardSummary hide={true}>
                <SummaryText>{user.description}</SummaryText>
            </ListCardSummary>
            <ListCardActions>
                <VerticalMenu
                    onItemTouchTap={(e, ch) =>
                        console.log(ch.props.primaryText)
                    }
                >
                    <MenuItem key="1" primaryText="Instance" />
                    <MenuItem key="2" primaryText="Volume" />
                    <MenuItem key="3" primaryText="Image" />
                </VerticalMenu>
            </ListCardActions>
        </ListCardHeader>
        <ListCardDetail  style={{border: "1px solid red"}}>
            <P>
                { user.description }
            </P>
        </ListCardDetail>
    </ListCard>
);

export default ListCardDetailEx;
