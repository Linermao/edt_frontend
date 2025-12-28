import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createFragmentRegistry, type FragmentRegistryAPI } from "@apollo/client/cache";
import { ProjectFragment, ViewerFragment, ViewerProjectsFragment } from "./Viewer.fragment";

export function useCreateApolloClient () {
    let uri: string = 'http://localhost:8080/api/graphql';

    let fragmentRegistry: FragmentRegistryAPI = createFragmentRegistry();
    fragmentRegistry.register(ViewerFragment);
    fragmentRegistry.register(ViewerProjectsFragment);
    fragmentRegistry.register(ProjectFragment);

    const cache = new InMemoryCache({
        fragments: fragmentRegistry,
    });
    
    const apolloClient = new ApolloClient({
        uri,
        cache,
    });

    return apolloClient;
}