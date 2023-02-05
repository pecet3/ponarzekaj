import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MainWrapper } from "../../../common/MainWrapper"
import { Error } from "../../../common/Notifications/Error";
import { Loading } from "../../../common/Notifications/Loading";
import { getArticleByName, selectStatus } from "../newsSlice";
import { Article, Content, Date, Header, Image, Source, Title } from "./styled";

export const ArticlePage = () => {
    const { id } = useParams();
    const article = useSelector(state => getArticleByName(state, id))
    const status = useSelector(selectStatus);

    return (
        <MainWrapper oneColumn={true}>
            {status === "error"
                ? <Error />
                : status === "initial"
                    || status === "loading"
                    ? <Loading />
                    : <Article>
                        <Header>
                            <Image
                                src={article.image_url && article.image_url}
                                alt="zdjęcie do artykułu"
                            />
                            <Title>{article.title && article.title}</Title>
                            <Date>{article.pubDate && article.pubDate}</Date>
                        </Header>
                        <Content>{article.description && article.description}</Content>
                        <Content>{article.content && article.content}</Content>
                        <Content>
                            Źródło: <Source
                                href={article.link && article.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {article.link && article.link}
                            </Source>
                        </Content>
                    </Article>}
        </MainWrapper>
    )
}